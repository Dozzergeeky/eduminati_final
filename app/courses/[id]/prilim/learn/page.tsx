import { Suspense } from "react";
import { CourseContent } from "./components/CourseContent";

// Force dynamic rendering to prevent build-time API calls
export const dynamic = 'force-dynamic'

async function getCourseData() {
  // Hardcoded course data - no external dependencies
  return {
    id: "1",
    title: "Mastering C++: From Beginner to Advanced",
    instructor: "Subhajit Srimani",
    description: "This comprehensive C++ course is designed for both beginners and experienced programmers. You'll start with the basics of C++ syntax and gradually move to advanced topics. By the end of this course, you'll be able to build efficient and scalable applications, solve complex problems, and ace technical interviews. Hands-on projects and real-world examples are included to solidify your understanding.",
    duration: "12 weeks (Approx. 6-8 hours per week)",
    chapters: [
      {
        title: "Introduction to C++",
        duration: "2h 30m",
        totalVideos: "4",
        lessons: [
          { title: "Introduction to Programming" },
          { title: "Setting up the Development Environment" },
          { title: "Writing Your First C++ Program" },
          { title: "Understanding Variables and Data Types" }
        ]
      },
      {
        title: "Basic C++ Concepts",
        duration: "3h 15m",
        totalVideos: "5",
        lessons: [
          { title: "Operators and Expressions" },
          { title: "Input and Output Streams" },
          { title: "Control Structures: If-Else" },
          { title: "Loops: For and While" },
          { title: "Functions and Scope" }
        ]
      },
      {
        title: "Object-Oriented Programming",
        duration: "4h 00m",
        totalVideos: "6",
        lessons: [
          { title: "Classes and Objects" },
          { title: "Constructors and Destructors" },
          { title: "Inheritance and Polymorphism" },
          { title: "Encapsulation and Abstraction" },
          { title: "Virtual Functions" },
          { title: "Operator Overloading" }
        ]
      },
      {
        title: "Advanced Data Structures",
        duration: "3h 45m",
        totalVideos: "5",
        lessons: [
          { title: "Arrays and Pointers" },
          { title: "Dynamic Memory Allocation" },
          { title: "Linked Lists" },
          { title: "Stacks and Queues" },
          { title: "Trees and Graphs" }
        ]
      },
      {
        title: "STL and Templates",
        duration: "2h 50m",
        totalVideos: "4",
        lessons: [
          { title: "Introduction to STL" },
          { title: "Vectors and Lists" },
          { title: "Maps and Sets" },
          { title: "Template Programming" }
        ]
      },
      {
        title: "File Handling and Exceptions",
        duration: "2h 20m",
        totalVideos: "3",
        lessons: [
          { title: "File Input/Output Operations" },
          { title: "Exception Handling" },
          { title: "Error Management" }
        ]
      },
      {
        title: "Project Development",
        duration: "3h 00m",
        totalVideos: "4",
        lessons: [
          { title: "Project Planning" },
          { title: "Building a Complete Application" },
          { title: "Code Optimization" },
          { title: "Final Project Presentation" }
        ]
      }
    ],
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
