import { Suspense } from "react";
import { CourseContent } from "./components/CourseContent";

// Force dynamic rendering to prevent build-time API calls
export const dynamic = 'force-dynamic'

async function getCourseData() {
  let result: any = {};
  try {
    // For server-side requests, use relative URLs in production
    let apiUrl: string;
    
    if (typeof window === 'undefined') {
      // Server-side: Check if we're in Vercel production
      if (process.env.VERCEL_URL) {
        apiUrl = `https://${process.env.VERCEL_URL}/api/courseData`;
      } else if (process.env.NODE_ENV === 'production') {
        // Fallback for production
        apiUrl = `https://eduminati-final.vercel.app/api/courseData`;
      } else {
        // Local development
        apiUrl = 'http://localhost:3000/api/courseData';
      }
    } else {
      // Client-side: use relative URL
      apiUrl = '/api/courseData';
    }
    
    const response = await fetch(apiUrl, {
      headers: {
        'User-Agent': 'NextJS'
      }
    });
    result = await response.json();
  } catch (error) {
    console.error("Error fetching course data:", error);
    // Return fallback data
    return {
      id: "1",
      title: "Course Unavailable",
      instructor: "Unknown",
      description: "Course data could not be loaded",
      duration: "N/A",
      chapters: [],
    };
  }

  // Check if result has the expected structure
  if (!result.result || !result.result[0]) {
    return {
      id: "1",
      title: "Course Unavailable",
      instructor: "Unknown", 
      description: "Course data could not be loaded",
      duration: "N/A",
      chapters: [],
    };
  }

  return {
    id: "1",
    title: result.result[0].course_name || "Course Unavailable",
    instructor: result.result[0].course_instructor || "Unknown",
    description: result.result[0].course_description || "No description available",
    duration: result.result[0].course_duration || "N/A",
    chapters: result.result[0].course_sections?.map((section: any) => ({
      title: section[0] || "Untitled",
      duration: section[1] || "N/A",
      totalVideos: section[2] || "N/A",
      lessons: section[3]?.map((lesson: any) => ({
        title: lesson || "Untitled Lesson",
      })) || [],
    })) || [],
  };
}

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function Page() {
  const courseData = await getCourseData();

  return (
    <Suspense fallback={<div>Loading course content...</div>}>
      <CourseContent courseData={courseData} />
    </Suspense>
  );
}
