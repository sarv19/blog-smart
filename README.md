# TechWave

This is an AI-powered blogging platform built with Supabase, Next.js, and TailwindCSS. Users can create, read, and like blog posts. The application integrates OpenAI API for content summarization.

Preview: https://sarah-techwave.vercel.app/blog

## Features

- User authentication using Supabase.
- Create and publish blog posts.
- Like functionality for posts.
- Content summarization using OpenAI API.
- Responsive design with TailwindCSS.

## Technologies Used

- [Supabase](https://supabase.io/) - Backend and authentication.
- [Next.js](https://nextjs.org/) - React framework for frontend.
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework.
- [OpenAI API](https://beta.openai.com/docs/) - For AI content summarization.

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

- Login: Users can log in using their email and password.
- Create Post: Logged-in users can create new blog posts, which are stored in Supabase.
- Like Post: Users can like posts, with likes stored in Supabase.
- AI Summarization: Users can input their OpenAI API key to enable content summarization for blog posts.

## Deployment

This project can be deployed using various platforms compatible with Next.js applications, such as Vercel or Netlify. Ensure to set up environment variables in your deployment environment.

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests to contribute.

## License

This project is licensed under the MIT License.
