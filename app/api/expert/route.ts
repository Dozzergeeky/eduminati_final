import { NextResponse } from "next/server";

export const runtime = "nodejs"; 

// Hardcoded expert quiz data - no external dependencies
const expertData = {
  "result": [
    {
      "options": [],
      "_id": "68049b668731c5a36688607d",
      "questions": [
        [
          "What does the explicit keyword do in C++?",
          [
            "Prevents implicit type conversion",
            "Marks a function as abstract",
            "Forces the function to be virtual",
            "Allows a constructor to be used implicitly"
          ],
          "0"
        ],
        [
          "What is the purpose of mutable keyword in C++?",
          [
            "Allows a non-const member variable to be modified inside a const member function",
            "Makes a class immutable",
            "Makes a variable volatile",
            "Prevents changes to an object"
          ],
          "0"
        ],
        [
          "Which of the following is true about C++ virtual functions?",
          [
            "They can only be declared inside a class",
            "They can be overridden in derived classes",
            "They are never inlined",
            "They must have a body in the base class"
          ],
          "1"
        ],
        [
          "Which of the following is used to define a destructor in C++?",
          [
            "~ClassName();",
            "ClassName::~();",
            "ClassName::~ClassName();",
            "~DestructorClass();"
          ],
          "0"
        ],
        [
          "What is the difference between new and malloc in C++?",
          [
            "malloc initializes memory while new does not",
            "new calls a constructor, while malloc does not",
            "malloc is used for allocating memory for arrays, while new is not",
            "Both are identical"
          ],
          "1"
        ],
        [
          "What does the virtual keyword imply when applied to a class destructor?",
          [
            "The destructor can be called only by the base class",
            "The destructor can be overridden in derived classes",
            "The destructor will not be inherited",
            "The destructor is automatically inline"
          ],
          "1"
        ],
        [
          "What is the output of the following code? int x = 5; cout << (x++ + ++x);",
          [
            "10",
            "11",
            "9",
            "8"
          ],
          "2"
        ],
        [
          "What is the correct way to implement a copy constructor in C++?",
          [
            "ClassName(const ClassName& obj);",
            "ClassName(ClassName& obj);",
            "ClassName(ClassName obj);",
            "ClassName(const ClassName obj);"
          ],
          "0"
        ],
        [
          "What is the purpose of the this pointer in C++?",
          [
            "To point to the base class object",
            "To refer to the object on which the member function is invoked",
            "To point to the current function",
            "To reference a static member"
          ],
          "1"
        ],
        [
          "What is the correct syntax to allocate memory for an array of 5 integers using new in C++?",
          [
            "int* arr = new int[5];",
            "int arr = new int[5];",
            "int* arr = new int[5]();",
            "int arr[5] = new int[];"
          ],
          "2"
        ],
        [
          "Which of the following statements is true about C++ templates?",
          [
            "Templates cannot be overloaded",
            "Templates are instantiated only when used",
            "Templates can only be used with classes",
            "Templates must be declared in a separate header file"
          ],
          "1"
        ],
        [
          "What is the result of the following code snippet? int a = 5, b = 10; cout << a < b;",
          [
            "5",
            "10",
            "false",
            "true"
          ],
          "2"
        ],
        [
          "How can you avoid the diamond problem in C++?",
          [
            "By using multiple inheritance",
            "By using virtual inheritance",
            "By using interfaces",
            "By using abstract classes"
          ],
          "1"
        ],
        [
          "What is a pure virtual function in C++?",
          [
            "A function that has no implementation and must be implemented in derived classes",
            "A function that is only used for documentation purposes",
            "A function that is implemented in the base class but cannot be overridden",
            "A function that cannot be called directly"
          ],
          "0"
        ],
        [
          "How is memory managed for a dynamically allocated array in C++?",
          [
            "delete for arrays, malloc for single variables",
            "delete[] for arrays, delete for single variables",
            "free() for arrays",
            "malloc() for arrays and single variables"
          ],
          "1"
        ],
        [
          "Which of the following is the correct way to create a static member function?",
          [
            "static void functionName();",
            "void static functionName();",
            "static functionName();",
            "void functionName() static;"
          ],
          "0"
        ],
        [
          "What is the difference between public, protected, and private access specifiers?",
          [
            "private members can only be accessed within the class, while public members can be accessed outside",
            "protected members can only be accessed within the derived class",
            "Both A and B",
            "All members are accessible outside the class"
          ],
          "2"
        ],
        [
          "Which of the following best describes a lambda function in C++?",
          [
            "A function that can be declared only within the body of another function",
            "A function that can be used as an argument to another function",
            "A function that can capture variables from its scope",
            "All of the above"
          ],
          "3"
        ],
        [
          "How do you handle exceptions in C++?",
          [
            "Using try, catch, and throw keywords",
            "Using if and else blocks",
            "Using finally blocks",
            "Using assert functions"
          ],
          "0"
        ],
        [
          "Which of the following is true about const objects in C++?",
          [
            "The object cannot be modified after initialization",
            "You cannot declare a const pointer to a non-constant type",
            "You can modify the pointer but not the object",
            "Both A and C"
          ],
          "3"
        ],
        [
          "Which of the following C++ features is used to prevent memory leaks in object-oriented programming?",
          [
            "Destructors",
            "Copy constructors",
            "Smart pointers",
            "Static members"
          ],
          "2"
        ],
        [
          "What is the output of the following code snippet? int x = 0; if (x == 0) { x = 1; } else { x = 2; } cout << x;",
          [
            "0",
            "1",
            "2",
            "Error"
          ],
          "1"
        ],
        [
          "Which of the following is used to define a template class in C++?",
          [
            "template <typename T> class ClassName {}",
            "template <T> class ClassName {}",
            "class ClassName<T> {}",
            "template <typename T> ClassName {}"
          ],
          "0"
        ],
        [
          "What is the correct syntax for calling a function in a base class from a derived class?",
          [
            "BaseClass::FunctionName();",
            "FunctionName::BaseClass();",
            "CallFunction(BaseClass::FunctionName);",
            "BaseClass.FunctionName();"
          ],
          "0"
        ],
        [
          "Which of the following operators can be overloaded in C++?",
          [
            "+",
            "[]",
            "++",
            "All of the above"
          ],
          "3"
        ]
      ]
    }
  ]
};

export async function GET() {
  try {
    console.log("✅ Successfully loaded hardcoded expert quiz data.");
    return NextResponse.json(expertData);
  } catch (error) {
    console.error("Error in GET route:", error);
    return NextResponse.json({ 
      error: "Failed to fetch data", 
      details: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
}