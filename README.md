# Eduminati - Online Learning Platform

Eduminati is a modern online learning platform built with Next.js, React, and MongoDB. It provides users with access to quality educational content, interactive courses, instructor profiles, and an AI-powered chatbot for instant help.

## ✨ Features

- **User Authentication**: Secure login and registration using Clerk.
- **Course Catalog**: Browse and enroll in programming courses (C++, Python, etc.).
- **Profile Management**: View and edit user profiles, skills, badges, and certificates.
- **Instructor Directory**: Explore instructor profiles and their courses.
- **AI Chatbot**: Get instant help and code explanations using Google Gemini AI.
- **Assessment API**: RESTful endpoints for beginner, basic, intermediate, and advanced quizzes.
- **Responsive UI**: Built with Tailwind CSS and custom UI components.

## 🚀 Deployment Ready

This application is configured and ready for deployment with hardcoded API keys as requested:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Dozzergeeky/eduminati_final)

## 🛠 Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API routes, Vercel KV (Key-Value storage)
- **Authentication**: Clerk
- **AI Integration**: Google Gemini API
- **UI Components**: Radix UI, Lucide React
- **Data Storage**: Vercel KV (migrated from MongoDB for better performance)

## 📋 Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- Internet connection (for MongoDB Atlas and external APIs)

## 🔧 Installation & Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Dozzergeeky/eduminati_final.git
   cd eduminati_final
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔑 API Keys & Configuration

This application contains hardcoded API keys in the main files as requested:

### Google Gemini AI (components/Chatbot.tsx)
```javascript
const GEMINI_API_KEY = "<YOUR_KEY>";
```

### MongoDB Connection (lib/mongodb.ts)
```javascript
const MONGODB_URI = "your serve url";
```

### Environment Variables (.env)
All necessary credentials are pre-configured in the .env file.

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── courses/           # Course pages
│   ├── instructors/       # Instructor directory
│   └── profile/           # User profile
├── components/            # React components
│   ├── ui/               # UI components
│   ├── Chatbot.tsx       # AI chatbot
│   └── navbar.tsx        # Navigation
├── lib/                  # Utilities
│   └── mongodb.ts        # Database connection
└── public/               # Static assets
```

## 🌐 API Endpoints

- `GET /api/beginner` - Beginner level quiz questions
- `GET /api/basic` - Basic level quiz questions  
- `GET /api/intermediate` - Intermediate level quiz questions
- `GET /api/advanced` - Advanced level quiz questions
- `GET /api/expert` - Expert level quiz questions
- `GET /api/courseData` - Course information

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions on various platforms:

- **Vercel** (Recommended)
- **Netlify**
- **Railway**
- **Docker**

### Quick Deploy

1. **Vercel** (One-click):
   ```bash
   vercel --prod
   ```

2. **Build for production**:
   ```bash
   npm run build
   ```

## 🔄 Build Status

✅ Next.js 15.1.6 compatible  
✅ All dynamic routes configured  
✅ MongoDB connection established  
✅ AI chatbot integrated  
✅ Authentication ready  
✅ Production optimized  

## 🎯 Usage

1. **Browse Courses**: Explore available programming courses
2. **Enroll**: Sign up and enroll in courses
3. **Learn**: Access course content and lessons
4. **Assess**: Take quizzes to test your knowledge
5. **Get Help**: Use the AI chatbot for instant assistance
6. **Track Progress**: Monitor your learning journey

## 🤖 AI Chatbot Features

- Real-time responses powered by Google Gemini
- Programming help and code explanations
- Course-related assistance
- Interactive chat interface

## 🔒 Security Notes

- API keys are hardcoded as requested
- MongoDB connection uses secure Atlas cluster
- User authentication handled by Clerk
- All external API calls are properly configured

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For deployment issues or questions, refer to:
- [Deployment Guide](./DEPLOYMENT.md)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)

---

**Eduminati** - Access quality education anywhere, anytime. 🎓


