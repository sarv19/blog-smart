SELECT
  cron.schedule (
    'invoke_fetch_youtube_videos',
    '0 6 * * *',
    $$
    SELECT
      net.http_post(
        url := 'https://<project-ref>.functions.supabase.co/fetch-youtube-videos',
        headers := jsonb_build_object(
          'Content-Type', 'application/json',
          'Authorization', 'Bearer <service-key>'
        ),
        body := jsonb_build_object(
          'channelIds', jsonb_build_array(
            'UCsBjURrPoezykLs9EqgamOA',
            'UCrkPsvLGln62OMZRO6K-llg',
            'UCUyeluBRhGPCW4rPe_UvBZQ'
          ),
          'time', now()
        ),
        timeout_milliseconds := 5000
      ) AS request_id;
    $$
  );