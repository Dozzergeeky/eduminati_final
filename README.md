# Eduminati - Online Learning Platform

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Dozzergeeky/eduminati_final)
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template)

Eduminati is a modern online learning platform built with Next.js, React, and MongoDB. It provides users with access to quality educational content, interactive courses, instructor profiles, and an AI-powered chatbot for instant help.

## 🚀 Quick Deploy

The application is **deployment-ready** with configurations for multiple platforms. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## Features

- **User Authentication**: Secure login and registration using Clerk.
- **Course Catalog**: Browse and enroll in programming courses (C++, Python, etc.).
- **Profile Management**: View and edit user profiles, skills, badges, and certificates.
- **Instructor Directory**: Explore instructor profiles and their courses.
- **AI Chatbot**: Get instant help and code explanations using Google Gemini AI.
- **Assessment API**: RESTful endpoints for beginner, basic, intermediate, and advanced quizzes.
- **Responsive UI**: Built with Tailwind CSS and custom UI components.

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API routes, MongoDB (Mongoose)
- **Authentication**: Clerk
- **AI Integration**: Google Gemini API
- **UI Icons**: Lucide React, React Icons

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- Yarn or npm
- MongoDB Atlas account
- Google Gemini API key
- Clerk account (for authentication)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/eduminati.git
   cd eduminati_final
   ```

2. **Install dependencies:**
   ```sh
   yarn install
   # or
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory and add:

   ```
   MONGODB_USERNAME=your_mongodb_username
   MONGODB_PASSWORD=your_mongodb_password
   GEMINI_API_KEY=your_gemini_api_key
   CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```

4. **Run the development server:**
   ```sh
   yarn dev
   # or
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/app` - Next.js app directory (pages, layouts, API routes)
- `/components` - Reusable React components (Navbar, Chatbot, UI elements)
- `/lib` - Utility functions and local knowledge base (optional)
- `/public` - Static assets
- `/styles` - Global and component styles

## API Endpoints

- `/api/beginner` - Beginner level quiz questions (MongoDB)
- `/api/basic` - Basic level quiz questions (MongoDB)
- `/api/intermediate` - Intermediate level quiz questions (MongoDB)
- `/api/advanced` - Advanced level quiz questions (MongoDB)

## Deployment

The Eduminati application can be deployed on multiple platforms. Here are the supported deployment options:

### 🚀 Vercel Deployment (Recommended)

Vercel is the easiest way to deploy Next.js applications:

1. **Fork/Clone this repository**
2. **Install the Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```
3. **Connect to Vercel**:
   - Visit [vercel.com](https://vercel.com) and sign up
   - Import your repository
   - Or use CLI: `vercel --prod`

4. **Configure Environment Variables** in Vercel Dashboard:
   - `DATABASE_URL` - Your MongoDB connection string
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - From Clerk dashboard
   - `CLERK_SECRET_KEY` - From Clerk dashboard  
   - `GEMINI_API_KEY` - From Google AI Studio

5. **Deploy**: Vercel will automatically build and deploy on every push to main branch.

### 🚢 Railway Deployment

Railway provides an excellent platform for full-stack applications:

1. **Connect your repository** to [Railway](https://railway.app)
2. **Add environment variables** in Railway dashboard
3. **Deploy**: Railway will automatically detect Next.js and deploy

### 🐳 Docker Deployment

For containerized deployment:

1. **Build the Docker image**:
   ```bash
   docker build -t eduminati-app .
   ```

2. **Run with environment variables**:
   ```bash
   docker run -p 3000:3000 \
     -e DATABASE_URL="your_mongodb_url" \
     -e NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_key" \
     -e CLERK_SECRET_KEY="your_clerk_secret" \
     -e GEMINI_API_KEY="your_gemini_key" \
     eduminati-app
   ```

### 🌐 Other Platforms

The application can also be deployed on:
- **Netlify** (with Next.js plugin)
- **AWS Amplify**
- **Google Cloud Run**
- **Azure Container Apps**

### Environment Variables Setup

1. **Copy the example environment file**:
   ```bash
   cp .env.example .env
   ```

2. **Configure the required variables**:
   - `DATABASE_URL`: MongoDB connection string
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Get from [Clerk Dashboard](https://dashboard.clerk.com)
   - `CLERK_SECRET_KEY`: Get from [Clerk Dashboard](https://dashboard.clerk.com)
   - `GEMINI_API_KEY`: Get from [Google AI Studio](https://ai.google.dev)

### Pre-deployment Checklist

- [ ] Environment variables configured
- [ ] MongoDB database accessible
- [ ] Clerk application set up
- [ ] Google Gemini API key obtained
- [ ] Build process tested locally (`npm run build`)
- [ ] Application tested in production mode (`npm start`)

## Security Notes

- **Never commit API keys or secrets to version control.** Use environment variables.
- The current codebase contains a hardcoded Gemini API key in `components/Chatbot.tsx`. **Replace this with a secure environment variable before deploying to production.**

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License.

---

**Eduminati** - Access quality education anywhere, anytime.

