// Note: This file is no longer used as we've switched to file-based data storage
// All API endpoints now read from JSON files in the /data directory
// This provides better reliability for Vercel deployments

// Database configuration constants (legacy - not used)
export const DB_CONFIG = {
  CLUSTER: process.env.MONGODB_CLUSTER || "cluster0.j9gms.mongodb.net",
  USERNAME: process.env.MONGODB_USERNAME,
  PASSWORD: process.env.MONGODB_PASSWORD,
  APP_NAME: process.env.MONGODB_APP_NAME || "Cluster0",
  OPTIONS: "retryWrites=true&w=majority"
};

// Helper function to build connection string for specific database (legacy - not used)
export function buildConnectionString(dbName: string): string {
  if (!DB_CONFIG.USERNAME || !DB_CONFIG.PASSWORD) {
    throw new Error("MongoDB credentials not found in environment variables");
  }
  
  const encodedDbName = encodeURIComponent(dbName);
  return `mongodb+srv://${DB_CONFIG.USERNAME}:${DB_CONFIG.PASSWORD}@${DB_CONFIG.CLUSTER}/${encodedDbName}?${DB_CONFIG.OPTIONS}&appName=${DB_CONFIG.APP_NAME}`;
}

// Common connection options (legacy - not used)
export const CONNECTION_OPTS = {
  bufferCommands: false,
};