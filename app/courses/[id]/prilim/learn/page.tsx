import { Suspense } from "react";
import { CourseContent } from "./components/CourseContent";

// Force dynamic rendering to prevent build-time API calls
export const dynamic = 'force-dynamic'

async function getCourseData() {
  let result: any = {};
  try {
    // Use environment variable for base URL or fallback
    const baseUrl = process.env.NEXTAUTH_URL || process.env.VERCEL_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/courseData`, {
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
