import { NextResponse } from "next/server";

export const runtime = "nodejs"; 

// Hardcoded beginner quiz data - no external dependencies
const beginnerData = {
  "result": [
    {
      "options": [],
      "_id": "680490568731c5a366886076",
      "questions": [
        [
          "Which of the following is a valid variable name in C++?",
          [
            "2variable",
            "_variable",
            "@variable",
            "-variable"
          ],
          "1"
        ],
        [
          "What is the size of an int in C++?",
          [
            "4 bytes",
            "8 bytes",
            "2 bytes",
            "1 byte"
          ],
          "0"
        ],
        [
          "Which of the following is a valid comment in C++?",
          [
            "# This is a comment",
            "// This is a comment",
            "/* This is a comment",
            "@ This is a comment"
          ],
          "1"
        ],
        [
          "Which of the following is a valid data type in C++?",
          [
            "integer",
            "num",
            "int",
            "float64"
          ],
          "2"
        ],
        [
          "What will be the output of cout << 5 + 3;?",
          [
            "5",
            "8",
            "53",
            "Error"
          ],
          "1"
        ],
        [
          "How do you declare a constant integer in C++?",
          [
            "const int a = 10;",
            "int const a = 10;",
            "Both A and B",
            "None of the above"
          ],
          "2"
        ],
        [
          "Which of the following is a relational operator in C++?",
          [
            "+",
            "==",
            "*",
            "="
          ],
          "1"
        ],
        [
          "What does the return keyword do in C++?",
          [
            "Returns a value from a function",
            "Ends the program",
            "Initializes a variable",
            "Declares a variable"
          ],
          "0"
        ],
        [
          "Which of the following is a loop structure in C++?",
          [
            "repeat",
            "for",
            "do",
            "end"
          ],
          "1"
        ],
        [
          "What is the default value of an uninitialized bool variable in C++?",
          [
            "false",
            "true",
            "0",
            "1"
          ],
          "0"
        ],
        [
          "Which of the following is used to take input in C++?",
          [
            "scanf()",
            "cin",
            "input()",
            "gets()"
          ],
          "1"
        ],
        [
          "What is the keyword used to declare a pointer in C++?",
          [
            "&",
            "*",
            "->",
            "::"
          ],
          "1"
        ],
        [
          "Which of the following is the correct way to define a function in C++?",
          [
            "function(int a, int b) { return a + b; }",
            "int function(int a, int b) { return a + b; }",
            "void function() { return; }",
            "Both B and C"
          ],
          "3"
        ],
        [
          "What is the output of the following code? cout << 10 % 3;",
          [
            "1",
            "3",
            "0",
            "2"
          ],
          "3"
        ],
        [
          "What is the result of the following expression: 5 > 3 && 2 < 4?",
          [
            "True",
            "False",
            "1",
            "0"
          ],
          "0"
        ],
        [
          "Which of the following is used to allocate memory dynamically in C++?",
          [
            "new",
            "malloc",
            "calloc",
            "Both A and B"
          ],
          "0"
        ],
        [
          "Which operator is used to get the address of a variable in C++?",
          [
            "*",
            "&",
            "->",
            "::"
          ],
          "1"
        ],
        [
          "Which of the following data types is used to store a single character in C++?",
          [
            "char",
            "string",
            "int",
            "bool"
          ],
          "0"
        ],
        [
          "Which of the following is not a valid operator in C++?",
          [
            "+",
            "=",
            "++",
            "<=!"
          ],
          "3"
        ],
        [
          "What is the default value of a float in C++?",
          [
            "0",
            "0.0",
            "NaN",
            "Garbage value"
          ],
          "3"
        ],
        [
          "How do you declare an array in C++?",
          [
            "int[] arr;",
            "int arr[];",
            "int arr[10];",
            "All of the above"
          ],
          "3"
        ],
        [
          "Which of the following is used to handle errors in C++?",
          [
            "try-catch",
            "throw-catch",
            "error()",
            "try-except"
          ],
          "0"
        ],
        [
          "What will the following code print? cout << 10 / 3.0;",
          [
            "3.33",
            "3",
            "3.0",
            "Error"
          ],
          "0"
        ],
        [
          "Which of the following is used for string concatenation in C++?",
          [
            "+",
            "&",
            "*",
            "."
          ],
          "0"
        ],
        [
          "How do you access the third element of an array arr in C++?",
          [
            "arr[3]",
            "arr(2)",
            "arr[2]",
            "arr(3)"
          ],
          "2"
        ]
      ]
    }
  ]
};

export async function GET() {
  try {
    console.log("✅ Successfully loaded hardcoded beginner quiz data.");
    return NextResponse.json(beginnerData);
  } catch (error) {
    console.error("Error in GET route:", error);
    return NextResponse.json({ 
      error: "Failed to fetch data", 
      details: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
}