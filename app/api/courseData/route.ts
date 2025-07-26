import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const runtime = "nodejs"; 

const encodedDbName = encodeURIComponent("Course1_c++");
const connectionSrt = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.j9gms.mongodb.net/${encodedDbName}?retryWrites=true&w=majority&appName=Cluster0`;

const courseSchema = new mongoose.Schema({
  course_name: { type: String, required: true },
  instructor: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: String, required: true },
  sections: { type: [{ type: [{ type: String, required: true }, { type: [String], required: true }], required: true }], required: true },
  price: { type: Number, required: true }
});

const CourseNew = mongoose.models.Details || mongoose.model("Details", courseSchema, "Details");

mongoose.set("debug", true);

// Global cache for serverless functions (production-ready for Vercel)
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    console.log("✅ Using cached MongoDB connection.");
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
      maxPoolSize: 10,
      heartbeatFrequencyMS: 10000,
    };

    console.log("🚀 Connecting to MongoDB...");
    cached.promise = mongoose.connect(connectionSrt, opts).then((mongoose) => {
      console.log("✅ Successfully connected to MongoDB.");
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error("❌ MongoDB connection error:", e);
    throw new Error(`Database connection failed: ${e instanceof Error ? e.message : String(e)}`);
  }

  return cached.conn;
}

let data: { course_name: string; instructor: string; description: string; duration: string; sections: { type: string; content: string[] }[], price: Number }[] = [];

export async function GET() {
  try {
    await connectDB();
    data = await CourseNew.find();
    
    if (!data || data.length === 0) {
      return NextResponse.json({ result: "No data found" }, { status: 404 });
    }
    return NextResponse.json({ result: data });
  } 
  catch (error) {
    console.error("Error in GET route:", error);
    return NextResponse.json({ 
      error: "Failed to fetch data", 
      details: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
}