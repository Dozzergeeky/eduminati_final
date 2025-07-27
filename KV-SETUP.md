# Vercel KV Migration Guide

## Overview
The application has been migrated from JSON file-based data storage to Vercel KV (Key-Value) storage for better performance and reliability in production.

## Setup Instructions

### 1. Create Vercel KV Database
1. Go to your Vercel dashboard
2. Navigate to your project
3. Go to "Storage" tab
4. Click "Create Database"
5. Select "KV" (Key-Value)
6. Choose a name for your database (e.g., "eduminati-data")
7. Create the database

### 2. Get KV Environment Variables
After creating the KV database, Vercel will provide you with:
- `KV_REST_API_URL` 
- `KV_REST_API_TOKEN`

Add these to your Vercel project environment variables.

### 3. Migrate Data to KV
Run the migration script to upload all JSON data to Vercel KV:

```bash
npm run migrate-kv
```

This will:
- Read all JSON files from the `/data` directory
- Upload them to Vercel KV with appropriate keys
- Verify the data was stored correctly

### 4. Deploy
Deploy your application to Vercel. The API routes will now read from KV instead of JSON files.

## Data Structure in KV

The following keys are used in Vercel KV:

| Key | Source File | Description |
|-----|-------------|-------------|
| `courseData` | `courseData.json` | Main course information |
| `basic` | `basic.json` | Basic level quiz data |
| `beginner` | `beginner.json` | Beginner level quiz data |
| `intermediate` | `intermediate.json` | Intermediate level quiz data |
| `advanced` | `advanced.json` | Advanced level quiz data |
| `expert` | `expert.json` | Expert level quiz data |

## Benefits of KV Storage

1. **Performance**: In-memory storage for faster data retrieval
2. **Reliability**: No file system dependencies 
3. **Scalability**: Automatically scales with your application
4. **Global**: Data is distributed globally via Vercel's edge network
5. **Consistency**: Eliminates potential file reading issues in serverless environments

## API Routes Updated

All 6 API routes have been updated to use Vercel KV:
- `/api/courseData`
- `/api/basic`
- `/api/beginner` 
- `/api/intermediate`
- `/api/advanced`
- `/api/expert`

## Troubleshooting

### Missing Environment Variables
If you see KV connection errors, ensure these environment variables are set in Vercel:
- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`

### Migration Fails
If the migration script fails:
1. Check that the KV database is created and accessible
2. Verify environment variables are correct
3. Ensure the `/data` directory contains all required JSON files

### Data Not Loading
If API routes return empty data:
1. Run the migration script again
2. Check Vercel function logs for KV connection errors
3. Verify data exists in KV using the Vercel dashboard

## Local Development

For local development, you can either:
1. Use Vercel CLI with `vercel dev` to connect to production KV
2. Or temporarily switch back to JSON files by updating the API routes

The JSON files are preserved in the `/data` directory as backup.