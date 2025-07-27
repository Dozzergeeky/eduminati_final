import { kv } from '@vercel/kv';
import { promises as fs } from 'fs';
import path from 'path';

// Data files to migrate
const dataFiles = [
  'courseData.json',
  'basic.json',
  'beginner.json',
  'intermediate.json',
  'advanced.json',
  'expert.json'
];

async function migrateToKV() {
  console.log('🚀 Starting migration to Vercel KV...');
  
  try {
    const dataDirectory = path.join(process.cwd(), 'data');
    
    for (const file of dataFiles) {
      const filePath = path.join(dataDirectory, file);
      const fileContents = await fs.readFile(filePath, 'utf8');
      const data = JSON.parse(fileContents);
      
      // Extract key name from filename (remove .json extension)
      const key = file.replace('.json', '');
      
      // Store in KV with the key
      await kv.set(key, data);
      
      console.log(`✅ Migrated ${file} to KV with key: ${key}`);
    }
    
    console.log('🎉 Migration completed successfully!');
    
    // Verify the data was stored correctly
    console.log('\n📋 Verifying stored data...');
    for (const file of dataFiles) {
      const key = file.replace('.json', '');
      const storedData = await kv.get(key);
      if (storedData) {
        console.log(`✅ ${key}: Data verified in KV`);
      } else {
        console.error(`❌ ${key}: No data found in KV`);
      }
    }
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

// Run the migration
migrateToKV().catch(console.error);