# Data Storage System

This directory contains JSON files that serve as the data source for the Eduminati application. This file-based approach was implemented to ensure reliable deployment on Vercel and other hosting platforms, eliminating database connection issues.

## Files

- `courseData.json` - Main course information including title, instructor, description, sections, and pricing
- `basic.json` - Basic level quiz questions
- `beginner.json` - Beginner level quiz questions  
- `intermediate.json` - Intermediate level quiz questions
- `advanced.json` - Advanced level quiz questions
- `expert.json` - Expert level quiz questions

## API Endpoints

The following API endpoints read from these JSON files:

- `/api/courseData` → `courseData.json`
- `/api/basic` → `basic.json`
- `/api/beginner` → `beginner.json`
- `/api/intermediate` → `intermediate.json`
- `/api/advanced` → `advanced.json`
- `/api/expert` → `expert.json`

## Benefits of File-Based Storage

1. **Reliability** - No database connection failures
2. **Performance** - Faster response times
3. **Simplicity** - No external dependencies
4. **Portability** - Works on any hosting platform
5. **Version Control** - Data changes are tracked in Git

## Modifying Data

To update course data or quiz questions:

1. Edit the appropriate JSON file
2. Ensure the JSON structure remains valid
3. Test locally with `npm run dev`
4. Deploy changes

## JSON Structure

### courseData.json
```json
{
  "result": [{
    "_id": "string",
    "course_name": "string",
    "course_instructor": "string", 
    "course_description": "string",
    "course_duration": "string",
    "Price": number,
    "course_sections": [
      ["section_title", "duration", "video_count", ["lesson1", "lesson2", ...]]
    ]
  }]
}
```

### Quiz files (basic.json, beginner.json, etc.)
```json
{
  "result": [{
    "questions": [
      ["question_text", ["option1", "option2", "option3", "option4"], "correct_answer_index"]
    ]
  }]
}
```