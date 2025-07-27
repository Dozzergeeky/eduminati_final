import { NextResponse } from "next/server";

export const runtime = "nodejs"; 

// Hardcoded advanced quiz data - no external dependencies
const advancedData = {
  "result": [
    {
      "options": [],
      "_id": "68049c268731c5a36688607f",
      "questions": [
        [
          "What does the virtual keyword do in C++?",
          [
            "It allows functions to be called from base class objects",
            "It forces a function to be called from the derived class",
            "It allows dynamic dispatch to be used when calling a function",
            "It prevents a function from being overridden"
          ],
          "2"
        ],
        [
          "In C++, which operator is used for memory allocation of arrays?",
          [
            "malloc()",
            "new[]",
            "new",
            "calloc()"
          ],
          "1"
        ],
        [
          "Which of the following is the correct declaration of a move constructor?",
          [
            "Class(Class&& obj);",
            "Class(Class obj);",
            "void Class(Class&& obj);",
            "void Class(Class obj);"
          ],
          "0"
        ],
        [
          "What is the purpose of std::unique_ptr in C++?",
          [
            "To manage memory shared across multiple owners",
            "To prevent copying and assign ownership of an object to only one pointer",
            "To create weak references for an object",
            "To allow shared access to an object in a multi-threaded environment"
          ],
          "1"
        ],
        [
          "What is function overloading in C++?",
          [
            "The ability to call a function multiple times",
            "The ability to define multiple functions with the same name but different signatures",
            "The ability to call a function from different classes",
            "The ability to override a function in a derived class"
          ],
          "1"
        ],
        [
          "What is the purpose of the explicit keyword in C++?",
          [
            "To make a function virtual",
            "To prevent implicit type conversions in constructors",
            "To allow overriding of functions",
            "To create an abstract class"
          ],
          "1"
        ],
        [
          "Which of the following is a correct way to define a template function in C++?",
          [
            "template <class T> void func(T arg);",
            "template <typename T> void func(T arg);",
            "Both A and B",
            "None of the above"
          ],
          "2"
        ],
        [
          "What is the difference between delete and delete[] in C++?",
          [
            "delete is used for single objects, delete[] is used for arrays",
            "delete[] is used for single objects, delete is used for arrays",
            "There is no difference",
            "delete is for heap memory, delete[] is for stack memory"
          ],
          "0"
        ],
        [
          "What is the purpose of the mutable keyword in C++?",
          [
            "To make a variable constant",
            "To allow a member variable to be modified even in const member functions",
            "To make a function virtual",
            "To prevent inheritance"
          ],
          "1"
        ],
        [
          "Which of the following is true about copy constructors in C++?",
          [
            "They are called when an object is assigned to another object",
            "They are called when an object is initialized with another object",
            "They are automatically generated if not defined by the user",
            "Both B and C"
          ],
          "3"
        ],
        [
          "What is the difference between struct and class in C++?",
          [
            "struct members are public by default, class members are private by default",
            "class members are public by default, struct members are private by default",
            "There is no difference",
            "struct is used for data, class is used for functions"
          ],
          "0"
        ],
        [
          "What is the purpose of the namespace keyword in C++?",
          [
            "To define a class",
            "To prevent naming conflicts and organize code",
            "To create global variables",
            "To define functions"
          ],
          "1"
        ],
        [
          "Which of the following is true about function templates in C++?",
          [
            "They allow the creation of generic functions",
            "They are instantiated at compile time",
            "They can work with different data types",
            "All of the above"
          ],
          "3"
        ],
        [
          "What is the correct syntax for declaring a pure virtual function in C++?",
          [
            "virtual void func() = 0;",
            "virtual void func();",
            "pure virtual void func();",
            "virtual void func() = null;"
          ],
          "0"
        ],
        [
          "What is the difference between early binding and late binding in C++?",
          [
            "Early binding occurs at compile time, late binding occurs at runtime",
            "Late binding occurs at compile time, early binding occurs at runtime",
            "Both occur at compile time",
            "Both occur at runtime"
          ],
          "0"
        ],
        [
          "Which of the following is true about the const keyword in C++?",
          [
            "It can be used to make variables immutable",
            "It can be used to make member functions read-only",
            "It can be used to make pointers immutable",
            "All of the above"
          ],
          "3"
        ],
        [
          "What is the purpose of the static keyword when used with class members?",
          [
            "To make the member accessible without creating an object of the class",
            "To make the member private",
            "To make the member virtual",
            "To make the member constant"
          ],
          "0"
        ],
        [
          "Which of the following is true about multiple inheritance in C++?",
          [
            "A class can inherit from multiple base classes",
            "It can lead to the diamond problem",
            "Virtual inheritance can be used to solve some issues",
            "All of the above"
          ],
          "3"
        ],
        [
          "What is the difference between pass by value and pass by reference in C++?",
          [
            "Pass by value creates a copy, pass by reference uses the original object",
            "Pass by reference creates a copy, pass by value uses the original object",
            "There is no difference",
            "Pass by value is faster than pass by reference"
          ],
          "0"
        ],
        [
          "What is the purpose of the override keyword in C++11?",
          [
            "To explicitly indicate that a function overrides a virtual function",
            "To prevent a function from being overridden",
            "To make a function virtual",
            "To create an abstract function"
          ],
          "0"
        ],
        [
          "Which of the following containers is associated with LIFO (Last In, First Out) behavior?",
          [
            "queue",
            "stack",
            "vector",
            "list"
          ],
          "1"
        ],
        [
          "What is the difference between std::shared_ptr and std::unique_ptr?",
          [
            "shared_ptr allows multiple owners, unique_ptr allows only one owner",
            "unique_ptr allows multiple owners, shared_ptr allows only one owner",
            "There is no difference",
            "shared_ptr is faster than unique_ptr"
          ],
          "0"
        ],
        [
          "What is the purpose of the final keyword in C++11?",
          [
            "To indicate the last function in a class",
            "To prevent a class from being inherited or a function from being overridden",
            "To mark the end of a program",
            "To define a constant"
          ],
          "1"
        ],
        [
          "Which of the following is true about lambda expressions in C++11?",
          [
            "They allow defining anonymous functions",
            "They can capture variables from the surrounding scope",
            "They can be used with STL algorithms",
            "All of the above"
          ],
          "3"
        ],
        [
          "What is the difference between std::move and std::forward in C++?",
          [
            "move casts to rvalue reference, forward preserves the value category",
            "forward casts to rvalue reference, move preserves the value category",
            "There is no difference",
            "move is faster than forward"
          ],
          "0"
        ]
      ]
    }
  ]
};

export async function GET() {
  try {
    console.log("✅ Successfully loaded hardcoded advanced quiz data.");
    return NextResponse.json(advancedData);
  } catch (error) {
    console.error("Error in GET route:", error);
    return NextResponse.json({ 
      error: "Failed to fetch data", 
      details: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
}