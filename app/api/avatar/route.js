import { decode } from "base64-arraybuffer";
import { supabase } from "@/lib/supabase/client";

export async function POST(req) {
    let body;
    try {
        body = await req.json();
    } catch {
        return Response.json({ error: "Invalid JSON" }, { status: 400 });
    }

    const { userId, action } = body;

    if (!userId) {
        return Response.json({ error: "Missing userId" }, { status: 400 });
    }

    const { data: userProfile, error: fetchError } = await supabase
        .from("user_profile")
        .select()
        .eq("user_id", userId);

    if (fetchError) {
        return Response.json({ error: fetchError.text }, { status: 500 });
    }
    try {
        if (action == "upload") {
            const { file } = body;

            if (!file) {
                return Response.json(
                    { error: "Missing file" },
                    { status: 400 }
                );
            }

            // Delete the current avatar if it exists
            if (userProfile?.avatar_url) {
                const currentAvatarPath = userProfile.avatar_url
                    .split("/")
                    .pop();
                const { error: deleteError } = await supabase.storage
                    .from("avatars")
                    .remove([currentAvatarPath]);

                if (deleteError) {
                    console.log("error deleting", deleteError);
                    return Response.json(
                        { error: deleteError.text },
                        { status: 500 }
                    );
                }
            }

            // Upload the new avatar
            const fileName = `${userId}_${file.name}`;
            const fileBuffer = decode(file.base64);
            const { error: uploadError } = await supabase.storage
                .from("avatars")
                .upload(fileName, fileBuffer, {
                    contentType: file.type,
                    cacheControl: "3600",
                    upsert: true,
                });

            if (uploadError) {
                console.log("error uploading", uploadError);
                return Response.json(
                    { error: uploadError.text },
                    { status: 500 }
                );
            }

            const { data: uploadData } = supabase.storage
                .from("avatars")
                .getPublicUrl(fileName);

            console.log({ uploadData });
            const avatarUrl = uploadData.publicUrl;

            // Update the user's profile with the new avatar URL
            const { error: updateError } = await supabase
                .from("user_profile")
                .update({ avatar_url: avatarUrl })
                .eq("user_id", userId);

            if (updateError) {
                console.log("error update", updateError);
                return Response.json(
                    { error: updateError.text },
                    { status: 500 }
                );
            }

            return Response.json({ avatarUrl }, { status: 200 });
        } else if (action == "remove") {
            if (userProfile && userProfile[0].avatar_url) {
                const currentAvatarPath = userProfile[0].avatar_url
                    .split("/")
                    .pop();
                const { error: deleteError } = await supabase.storage
                    .from("avatars")
                    .remove([currentAvatarPath]);

                if (deleteError) {
                    console.log("error deleting", deleteError);
                    return Response.json(
                        { error: deleteError.text },
                        { status: 500 }
                    );
                }

                const { error: updateError } = await supabase
                    .from("user_profile")
                    .update({ avatar_url: null })
                    .eq("user_id", userId);

                if (updateError) {
                    console.log("error update", updateError);
                    return Response.json(
                        { error: updateError.text },
                        { status: 500 }
                    );
                }
                Response.json({ message: "Avatar removed" }, { status: 200 });
            } else {
                Response.json(
                    { error: "No avatar to remove" },
                    { status: 405 }
                );
            }
        } else {
            Response.json({ error: "Invalid action" }, { status: 405 });
        }
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
    Response.json({ message: "Success" }, { status: 200 });
}
