import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export const runtime = "nodejs"; 

export async function GET() {
  try {
    // Read data from JSON file instead of MongoDB
    const jsonDirectory = path.join(process.cwd(), 'data');
    const fileContents = await fs.readFile(jsonDirectory + '/beginner.json', 'utf8');
    const data = JSON.parse(fileContents);
    
    console.log("✅ Successfully loaded beginner quiz data from JSON file.");
    
    if (!data.result || data.result.length === 0) {
      return NextResponse.json({ result: "No data found" }, { status: 404 });
    }

    return NextResponse.json({ result: data.result });
  } catch (error) {
    console.error("Error in GET route:", error);
    return NextResponse.json({ 
      error: "Failed to fetch data", 
      details: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
}