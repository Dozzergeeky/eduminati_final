import { NextResponse } from "next/server";

export const runtime = "nodejs"; 

// Hardcoded course data - no external dependencies
const courseData = {
  "result": [
    {
      "_id": "67eea2e9a5aa378af28b1e4c",
      "course_name": "Mastering C++: From Beginner to Advanced",
      "course_instructor": "Subhajit Srimani",
      "course_description": "This comprehensive C++ course is designed for both beginners and experienced programmers. You'll start with the basics of C++ syntax and gradually move to advanced topics. By the end of this course, you'll be able to build efficient and scalable applications, solve complex problems, and ace technical interviews. Hands-on projects and real-world examples are included to solidify your understanding.",
      "course_duration": "12 weeks (Approx. 6-8 hours per week)",
      "Price": 1000,
      "course_sections": [
        ["Introduction to C++", "2h 30m", "4", ["Introduction to Programming", "Setting up the Development Environment", "Writing Your First C++ Program", "Understanding Variables and Data Types"]],
        ["Basic C++ Concepts", "3h 15m", "5", ["Operators and Expressions", "Input and Output Streams", "Control Structures: If-Else", "Loops: For and While", "Functions and Scope"]],
        ["Object-Oriented Programming", "4h 00m", "6", ["Classes and Objects", "Constructors and Destructors", "Inheritance and Polymorphism", "Encapsulation and Abstraction", "Virtual Functions", "Operator Overloading"]],
        ["Advanced Data Structures", "3h 45m", "5", ["Arrays and Pointers", "Dynamic Memory Allocation", "Linked Lists", "Stacks and Queues", "Trees and Graphs"]],
        ["STL and Templates", "2h 50m", "4", ["Introduction to STL", "Vectors and Lists", "Maps and Sets", "Template Programming"]],
        ["File Handling and Exceptions", "2h 20m", "3", ["File Input/Output Operations", "Exception Handling", "Error Management"]],
        ["Project Development", "3h 00m", "4", ["Project Planning", "Building a Complete Application", "Code Optimization", "Final Project Presentation"]]
      ]
    }
  ]
};

export async function GET() {
  try {
    console.log("✅ Successfully loaded hardcoded course data.");
    return NextResponse.json(courseData);
  } 
  catch (error) {
    console.error("Error in GET route:", error);
    return NextResponse.json({ 
      error: "Failed to fetch data", 
      details: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
}