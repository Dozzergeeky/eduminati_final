import { NextResponse } from "next/server";
import { KVService, DATA_KEYS } from "@/lib/kv-service";

export const runtime = "nodejs"; 

export async function GET() {
  try {
    // Get data from Vercel KV instead of JSON file
    const data = await KVService.get(DATA_KEYS.BASIC);
    
    console.log("✅ Successfully loaded basic quiz data from Vercel KV.");
    
    if (!data || !data.result || data.result.length === 0) {
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