# TechWave

TechWave is a content aggregation platform built with Supabase, Next.js, and TailwindCSS. It provides a seamless experience for users to explore the latest articles and videos from top tech sources. The app updates daily with fresh content and ensures outdated posts are automatically removed.

Preview: https://sarah-techwave.vercel.app/blog

## Features

#### Daily Content Fetching:
- At 6 AM every day, the app collects articles from a curated list of tech websites, focusing on posts published in the last 24 hours.

- Fetches the latest videos from selected YouTube tech channels.

#### Content Aggregation:
- Displays both articles and YouTube videos in a scrollable list.

- Uses visual indicators (like colors) to differentiate between articles and videos.


#### Automatic Cleanup:
- Content older than 1 week is automatically deleted from the database.

#### User Authentication with Supabase:
- Users can log in to explore content and interact with the platform.

#### Responsive Design:
- Styled with TailwindCSS for a smooth experience across devices.

## How the Platform Works
### Daily Updates at 6 AM:

- Every day at 6 AM, the app retrieves the latest articles from a predefined list of tech websites.
- It also checks specified YouTube tech channels for new videos posted within the last 24 hours.
### Content Storage and Cleanup:
- Articles and videos are stored in a Supabase database.
- Any content older than 7 days is automatically removed to keep the platform fresh.
### Visual Differentiation:
- Articles and videos are displayed together in a scrollable list.
- YouTube videos are styled differently (e.g., different background or text color) to distinguish them from articles.
### Interactive Experience:
- Users can click on any article or video to be redirected to the original source.
- User authentication is provided through Supabase, allowing for personalized interactions.
### Responsive Design:
- The UI is built with TailwindCSS, ensuring it works smoothly across devices and screen sizes.

## Technologies Used

- [Supabase](https://supabase.io/) - Backend and authentication.
- [Next.js](https://nextjs.org/) - React framework for frontend.
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework.
- [OpenAI API](https://beta.openai.com/docs/) - For AI content summarization.
- YouTube Data API: For fetching the latest videos from tech channels.

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/sarv19/blog-smart.git
   cd blog-smart
   ```
2. **Install dependencies**
   ```bash
   npm i
   ```
3. **Set up environment variables**

- Create a .env.local file in the root directory.
- Add your Supabase credentials and OpenAI API key:
  ```bash
  NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
  NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
  OPENAI_API_KEY=your-openai-api-key
  ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
5. **Open the app**
   ```bash
   Open http://localhost:3000 in your browser.
   ```

## Usage

### Login:
Users can log in using their email and password.
### View Content:
+ Browse the latest tech news articles and YouTube videos.
+ Click any item to visit the original post or video.
### Content Refresh:
- The app updates daily at 6 AM to ensure only the latest content is shown.

## Deployment

This project can be deployed using various platforms compatible with Next.js applications, such as Vercel or Netlify. Ensure to set up environment variables in your deployment environment.

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests to contribute.

## License

This project is licensed under the MIT License.
