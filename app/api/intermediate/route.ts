import { NextResponse } from "next/server";

export const runtime = "nodejs"; 

// Hardcoded intermediate quiz data - no external dependencies
const intermediateData = {
  "result": [
    {
      "options": [],
      "_id": "680499f78731c5a36688607c",
      "questions": [
        [
          "What is the difference between new and malloc in C++?",
          [
            "new initializes memory, malloc does not",
            "new returns a pointer, malloc returns an object",
            "malloc initializes memory, new does not",
            "There is no difference"
          ],
          "0"
        ],
        [
          "Which of the following is a correct way to declare a function in C++?",
          [
            "void add(int a, int b) { return a + b; }",
            "void add(int a, int b) { cout << a + b; }",
            "int add(int a, int b) { return a + b; }",
            "Both B and C"
          ],
          "3"
        ],
        [
          "Which of the following containers is used to store key-value pairs in C++?",
          [
            "vector",
            "list",
            "map",
            "set"
          ],
          "2"
        ],
        [
          "Which of the following is a valid destructor in C++?",
          [
            "~class()",
            "~Class()",
            "~Class{}",
            "None of the above"
          ],
          "1"
        ],
        [
          "What is the purpose of the virtual keyword in C++?",
          [
            "It makes a function return a virtual value",
            "It allows a function to be overridden in derived classes",
            "It creates an abstract class",
            "It defines a constructor in a derived class"
          ],
          "1"
        ],
        [
          "What is the correct syntax for a for-each loop in C++?",
          [
            "for(int x : arr)",
            "for(int x = 0; x < arr.length(); x++)",
            "for(arr : int)",
            "for x in arr"
          ],
          "0"
        ],
        [
          "How do you pass an array by reference in C++?",
          [
            "void func(int arr[])",
            "void func(int* arr)",
            "void func(int (&arr)[])",
            "Both A and B"
          ],
          "3"
        ],
        [
          "What is the purpose of const keyword in C++?",
          [
            "To create constant variables",
            "To make function arguments constant",
            "To prevent modification of a value",
            "All of the above"
          ],
          "3"
        ],
        [
          "Which of the following is used to handle exceptions in C++?",
          [
            "try-catch",
            "throw-catch",
            "error-catch",
            "throw-except"
          ],
          "0"
        ],
        [
          "Which of the following is used to initialize a pointer in C++?",
          [
            "&",
            "*",
            "new",
            "ref"
          ],
          "2"
        ],
        [
          "What is the purpose of the friend keyword in C++?",
          [
            "To allow a function or class to access private members of another class",
            "To define global functions",
            "To define an array",
            "To declare a pointer"
          ],
          "0"
        ],
        [
          "What will be the output of the following code? cout << sizeof(int);",
          [
            "2",
            "4",
            "8",
            "It depends on the system"
          ],
          "1"
        ],
        [
          "Which of the following is the correct syntax for declaring a pointer in C++?",
          [
            "int* ptr;",
            "int ptr*;",
            "ptr int*;",
            "int* ptr();"
          ],
          "0"
        ],
        [
          "What is the purpose of static keyword in C++?",
          [
            "It prevents a variable from being destroyed",
            "It makes a function static",
            "It restricts the scope of a variable to the function in which it is defined",
            "All of the above"
          ],
          "3"
        ],
        [
          "Which of the following statements is true about function overloading?",
          [
            "Function overloading is based on the return type of the function",
            "Function overloading is based on the number or type of arguments",
            "Function overloading is not allowed in C++",
            "Function overloading is based on the scope of the function"
          ],
          "1"
        ],
        [
          "What will the following code print? cout << 10 / 3.0;",
          [
            "3.0",
            "3",
            "3.333333",
            "Error"
          ],
          "2"
        ],
        [
          "Which of the following is used for dynamic memory allocation in C++?",
          [
            "new",
            "malloc",
            "calloc",
            "All of the above"
          ],
          "3"
        ],
        [
          "Which of the following statements is false about inheritance in C++?",
          [
            "A derived class can access private members of the base class",
            "A derived class can access protected members of the base class",
            "A derived class can access public members of the base class",
            "A derived class can inherit members from multiple base classes"
          ],
          "0"
        ],
        [
          "What is the purpose of the this pointer in C++?",
          [
            "To refer to the address of the current object",
            "To refer to the current class",
            "To allocate memory dynamically",
            "To create a copy of an object"
          ],
          "0"
        ],
        [
          "What is a virtual function in C++?",
          [
            "A function that is defined in the base class and can be overridden in the derived class",
            "A function that cannot be overridden in the derived class",
            "A function that is always static",
            "A function that must return a pointer"
          ],
          "0"
        ],
        [
          "Which of the following is the correct way to use std::vector in C++?",
          [
            "std::vector<int> v;",
            "std::vector<int> v = new int[10];",
            "std::vector<int> v[10];",
            "std::vector<int> v(10, 5);"
          ],
          "0"
        ],
        [
          "What is the difference between == and = in C++?",
          [
            "== is used for assignment, = is used for comparison",
            "== is used for comparison, = is used for assignment",
            "There is no difference",
            "Both are used for assignment"
          ],
          "1"
        ],
        [
          "What will the following code print? int x = 5; cout << x++ << \" \" << ++x;",
          [
            "5 6",
            "6 5",
            "5 7",
            "6 6"
          ],
          "2"
        ],
        [
          "What does the friend function allow in C++?",
          [
            "Access private members of a class",
            "Modify private members of a class",
            "Define a function outside a class",
            "All of the above"
          ],
          "3"
        ],
        [
          "What is the syntax to define a constructor in C++?",
          [
            "void ClassName()",
            "ClassName(void)",
            "ClassName()",
            "constructor ClassName()"
          ],
          "2"
        ]
      ]
    }
  ]
};

export async function GET() {
  try {
    console.log("✅ Successfully loaded hardcoded intermediate quiz data.");
    return NextResponse.json(intermediateData);
  } catch (error) {
    console.error("Error in GET route:", error);
    return NextResponse.json({ 
      error: "Failed to fetch data", 
      details: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
}
