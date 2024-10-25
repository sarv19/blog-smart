import { useContext, useEffect, useState } from "react";
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
import { Trash2, Upload } from "lucide-react";
import Image from "next/image";
import { UserContext } from "@/app/blog/layout";
import { Button } from "../ui/button";

const Setting = () => {
    const [file, setFile] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState("");
    const { user } = useContext(UserContext);

    const handleFileChange = async (e) => {
        const selectedFile = e.target.files[0];

        const reader = new FileReader();
        reader.onload = () => {
            setFile({
                name: selectedFile.name,
                type: selectedFile.type,
                base64: reader.result.split(",")[1], // Strip out the base64 prefix
            });
        };
        reader.readAsDataURL(selectedFile);
    };

    useEffect(() => {
        if (file) {
            handleUpload();
        }
    }, [file]);

    const handleUpload = async () => {
        if (!file) {
            alert("Please select a file to upload");
            return;
        }

        if (!user || !user.id) return;

        try {
            const response = await fetch("/api/avatar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: user.id,
                    file,
                    action: "upload",
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setAvatarUrl(data.avatarUrl);
            } else {
                throw new Error(data.error);
            }
        } catch (error) {
            console.error("Upload error:", error);
            alert(error.message);
        }
    };

    const handleRemove = async () => {
        try {
            const response = await fetch("/api/avatar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userId: user.id, action: "remove" }),
            });

            const data = await response.json();

            if (response.ok) {
                setAvatarUrl("");
            } else {
                throw new Error(data.error);
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="min-w-[450px] p-2 w-full flex flex-col justify-center text-xs">
            <div className="w-full flex justify-center items-end pt-10 relative">
                <div className="w-32 h-32 rounded-full border overflow-hidden">
                    <Image
                        src={avatarUrl || "/avatar.webp"}
                        alt="avatar"
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                    />
                </div>
                <Button
                    variant="ghost"
                    className="w-fit h-fit p-2 text-xs cursor-pointer"
                >
                    <label htmlFor="avatar-upload" className="cursor-pointer">
                        <Upload width={15} height={15} />
                    </label>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                        id="avatar-upload"
                    />
                </Button>
                <Button
                    variant="ghost"
                    className="w-fit h-fit p-2 text-xs cursor-pointer"
                    onClick={handleRemove}
                >
                    <Trash2 width={15} height={15} />
                </Button>
            </div>
        </div>
    );
};

export default Setting;
