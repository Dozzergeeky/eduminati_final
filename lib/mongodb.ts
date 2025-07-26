import mongoose from "mongoose";

// Hardcoded MongoDB connection string (as requested to keep API keys in main files)
const MONGODB_URI = "mongodb+srv://subhrasrimani2002:u3A9LipaovgJrxNJ@cluster.hr3bm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster";

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

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    // Use specific database name if provided
    const connectionString = dbName 
      ? MONGODB_URI.replace("/?retryWrites", `/${encodeURIComponent(dbName)}?retryWrites`)
      : MONGODB_URI;

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