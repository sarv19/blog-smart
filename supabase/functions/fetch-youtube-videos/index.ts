// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";

const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

async function fetchYouTubeVideos(channelId: string) {
    const apiKey = Deno.env.get("YOUTUBE_API_KEY");
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&type=video&order=date&maxResults=10`;
    console.log({ url });
    const response = await fetch(url);
    const data = await response.json();
    const now = new Date();
    const videos = data.items
        .filter((item: any) => {
            const publishedAt = new Date(item.snippet.publishedAt);
            const diffInHours =
                (now.getTime() - publishedAt.getTime()) / (1000 * 60 * 60);
            return diffInHours <= 48;
        })
        .map((item: any) => ({
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.high.url,
            description: item.snippet.description,
            url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            channel_name: item.snippet.channelTitle,
            type: "video",
        }));

    return videos;
}

async function insertVideosIntoSupabase(videos: any[]) {
    const { data, error } = await supabase.from("content").insert(videos);

    if (error) {
        console.error("Error inserting videos into Supabase:", error);
    } else {
        console.log("Successfully inserted videos into Supabase:", data);
    }
}

Deno.serve(async (req) => {
    const { name, channelId } = await req.json();
    let data;

    if (channelId) {
        try {
            const videos = await fetchYouTubeVideos(channelId);
            await insertVideosIntoSupabase(videos);
            data = { videos };
        } catch (error) {
            data = { error: error.message };
        }
    } else {
        data = {
            message: `Hello ${name}!`,
        };
    }

    return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
    });
});

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/fetch-youtube-videos' \
    --header 'Authorization: Bearer ' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions", "channelId":"YOUR_CHANNEL_ID"}'

*/
