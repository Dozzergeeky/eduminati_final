import mongoose from "mongoose";

// MongoDB connection using environment variables
const MONGODB_USERNAME = process.env.MONGODB_USERNAME;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
const MONGODB_CLUSTER = process.env.MONGODB_CLUSTER || "cluster0.j9gms.mongodb.net";
const MONGODB_APP_NAME = process.env.MONGODB_APP_NAME || "Cluster0";

// Fallback to DATABASE_URL if individual credentials not available
const MONGODB_URI = process.env.DATABASE_URL || 
  `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}/?retryWrites=true&w=majority&appName=${MONGODB_APP_NAME}`;

// Global is used here to maintain a cached connection across hot reloads
// in development. This prevents connections growing exponentially
// during API Route usage.
declare global {
  var mongoose: any;
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB(dbName?: string) {
  if (cached.conn) {
    console.log("✅ Using cached MongoDB connection.");
    return cached.conn;
  }

  if (!MONGODB_URI) {
    throw new Error("❌ MongoDB connection string not found in environment variables");
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    // Use specific database name if provided
    let connectionString = MONGODB_URI;
    if (dbName) {
      // Extract base URL without database name
      const baseUrl = connectionString.replace(/\/[^?]*\?/, "/?");
      connectionString = baseUrl.replace("/?", `/${encodeURIComponent(dbName)}?`);
    }

    console.log("🚀 Connecting to MongoDB...");
    cached.promise = mongoose.connect(connectionString, opts).then((mongoose) => {
      console.log("✅ Successfully connected to MongoDB.");
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error("❌ MongoDB connection error:", e);
    throw e;
  }

  return cached.conn;
}

export default connectDB;