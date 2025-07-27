import { NextResponse } from "next/server";

export const runtime = "nodejs"; 

// Hardcoded basic quiz data - no external dependencies
const basicData = {
  "result": [
    {
      "options": [],
      "_id": "68049dc48731c5a366886080",
      "questions": [
        [
          "Which extension is used for C++ source files?",
          [
            ".cpp",
            ".cxx",
            ".c++",
            "All of the above"
          ],
          "0"
        ],
        [
          "Which of the following is a valid identifier in C++?",
          [
            "123var",
            "var_123",
            "int",
            "@variable"
          ],
          "1"
        ],
        [
          "Which header file is required for cout and cin?",
          [
            "<stdio.h>",
            "<iostream>",
            "<conio.h>",
            "<stdlib.h>"
          ],
          "1"
        ],
        [
          "What does return 0; signify in the main() function?",
          [
            "Function execution failed",
            "Program executed successfully",
            "Return value is 0",
            "Indicates an error"
          ],
          "1"
        ],
        [
          "Which of the following is NOT a valid C++ data type?",
          [
            "int",
            "double",
            "string",
            "character"
          ],
          "3"
        ],
        [
          "What is the output of cout << 10 / 4;?",
          [
            "2.5",
            "2",
            "3",
            "0"
          ],
          "1"
        ],
        [
          "Which operator is used for the modulus operation?",
          [
            "%",
            "/",
            "^",
            "*"
          ],
          "0"
        ],
        [
          "What is the default value of an uninitialized integer variable?",
          [
            "0",
            "Garbage value",
            "Depends on OS",
            "NULL"
          ],
          "1"
        ],
        [
          "Which of the following statements is correct about C++?",
          [
            "C++ is a procedural programming language",
            "C++ supports both procedural and object-oriented programming",
            "C++ does not support OOP",
            "C++ is only used for web development"
          ],
          "1"
        ],
        [
          "Which keyword is used to define a constant?",
          [
            "var",
            "define",
            "const",
            "final"
          ],
          "2"
        ],
        [
          "What is the correct syntax to declare an integer variable?",
          [
            "int x;",
            "integer x;",
            "var x;",
            "x = int;"
          ],
          "0"
        ],
        [
          "What is the output of cout << 5 + 2 * 3;?",
          [
            "21",
            "11",
            "15",
            "16"
          ],
          "1"
        ],
        [
          "What is the correct syntax for a single-line comment in C++?",
          [
            "-- This is a comment",
            "# This is a comment",
            "// This is a comment",
            "/* This is a comment */"
          ],
          "2"
        ],
        [
          "How do you declare an array of integers in C++?",
          [
            "int arr[];",
            "array<int> arr;",
            "int arr[5];",
            "int[] arr;"
          ],
          "2"
        ],
        [
          "What is the output of cout << (5 > 3 ? 5 : 3);?",
          [
            "3",
            "5",
            "true",
            "false"
          ],
          "1"
        ],
        [
          "Which keyword is used to create a loop in C++?",
          [
            "for",
            "loop",
            "while",
            "Both A and C"
          ],
          "3"
        ],
        [
          "What is the size of an int in C++ (typically on a 32-bit system)?",
          [
            "1 byte",
            "2 bytes",
            "4 bytes",
            "8 bytes"
          ],
          "2"
        ],
        [
          "What is the output of cout << (10 == 10);?",
          [
            "0",
            "1",
            "true",
            "false"
          ],
          "1"
        ],
        [
          "Which function is used to get input from the user?",
          [
            "input()",
            "cin",
            "scan()",
            "get()"
          ],
          "1"
        ],
        [
          "What is the default access specifier for members of a class in C++?",
          [
            "public",
            "private",
            "protected",
            "None of the above"
          ],
          "1"
        ],
        [
          "What is the correct syntax for a multi-line comment in C++?",
          [
            "// This is a comment",
            "# This is a comment",
            "/* This is a comment */",
            "-- This is a comment"
          ],
          "2"
        ],
        [
          "What is the correct syntax to declare a pointer?",
          [
            "int *ptr;",
            "ptr int;",
            "int ptr;",
            "pointer<int> ptr;"
          ],
          "0"
        ],
        [
          "What is the purpose of the return statement in a function?",
          [
            "To terminate the program",
            "To return a value to the caller",
            "To print output",
            "To declare a variable"
          ],
          "1"
        ],
        [
          "What is the output of cout << (7 & 3);?",
          [
            "0",
            "1",
            "3",
            "2"
          ],
          "3"
        ],
        [
          "Which of the following is the correct syntax for a switch statement?",
          [
            "switch(variable) { case 1: break; }",
            "switch(variable) { case 1: break; }",
            "switch(variable) { 1: break; }",
            "switch(variable) { case (1): break; }"
          ],
          "0"
        ]
      ]
    }
  ]
};

export async function GET() {
  try {
    console.log("✅ Successfully loaded hardcoded basic quiz data.");
    return NextResponse.json(basicData);
  } catch (error) {
    console.error("Error in GET route:", error);
    return NextResponse.json({ 
      error: "Failed to fetch data", 
      details: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
}