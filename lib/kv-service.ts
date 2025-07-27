import { kv } from '@vercel/kv';

// Type definitions for our data structure
export interface DataResult {
  result: any[];
}

// KV utility functions for data operations
export class KVService {
  
  static async get(key: string): Promise<DataResult | null> {
    try {
      const data = await kv.get<DataResult>(key);
      return data;
    } catch (error) {
      console.error(`Error fetching data from KV for key ${key}:`, error);
      throw error;
    }
  }

  static async set(key: string, value: DataResult) {
    try {
      await kv.set(key, value);
      console.log(`✅ Successfully stored data in KV with key: ${key}`);
    } catch (error) {
      console.error(`Error storing data in KV for key ${key}:`, error);
      throw error;
    }
  }

  static async exists(key: string): Promise<boolean> {
    try {
      const data = await kv.get(key);
      return data !== null;
    } catch (error) {
      console.error(`Error checking existence in KV for key ${key}:`, error);
      return false;
    }
  }
}

// Available data keys
export const DATA_KEYS = {
  COURSE_DATA: 'courseData',
  BASIC: 'basic',
  BEGINNER: 'beginner', 
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced',
  EXPERT: 'expert'
} as const;

export type DataKey = typeof DATA_KEYS[keyof typeof DATA_KEYS];