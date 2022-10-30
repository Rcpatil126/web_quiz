// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "print( 2**3 + (5+6)** (1+1)) ?",
    answer: "129",
    options: [
       "129",
       "156",
       "212",
       "176",
    ]
  },
    {
    numb: 2,
    question: "Which one of the following also known as Conditional Expression:?",
    answer: "If-then-else statement",
    options: [
      "Alternative to if-else",
      "Switch statement",
      "If-then-else statement",
      "immediate if"
    ]
  },
    {
    numb: 3,
    question: "When interpreter encounters an empty statements, what it will do ?",
    answer: "Throws an error",
    options: [
      "Shows a warning",
      "Prompts to complete",
      "Throws an error",
      "Ignores the statements"
    ]
  },
    {
    numb: 4,
    question: "Which of the following concept is not part of python?",
    answer: "Pointers",
    options: [
       "Pointers",
       "Loops",
       "Dynamic Typing",
       "None the above",
    ]
  },
    {
    numb: 5,
    question: "which of the following statements are used in Exceptin Handling in python ?",
    answer: "all of the above",
    options: [
       "Try",
       "except",
       "finally",
       "all of the above",
    ]
  },


  {
    numb: 6,
    question: "Which of the following type of a variable is volatile ?",
    answer: "Mutable variable",
    options: [
       "Mutable variable",
       "Dynamic variable",
       "Volatile variable",
       "Immutable variable",
    ]
  },

  {
    numb: 7,
    question: "Which of the following option is used as hexadecimal literal beginning ?",
    answer: "Both 0x and 0X",
    options: [
      "00",
      "0x",
      "0X",
      "Both 0x and 0X",
    ]
  },
  {
    numb: 8,
    question: "what will be the output -- a = [1,2] print(a * 3)",
    answer: "[1,2,1,2,1,2]",
    options: [
       "[1,2][1.2][1,2]",
       "([1,2][1.2][1,2])",
       "[1,2,1,2,1,2]",
       "([1,2,1,2,1,2])",
    ]
  },
  {
    numb: 9,
    question: "Which of the following function convert date to time in python ?",
    answer: "strptime()",
    options: [
       "strptime",
       "strptime()",
       "strftime()",
       "datetime()",
    ]
  },
  {
    numb: 10,
    question: "As what datatype are the *args stored when passed into a function ?",
    answer: "Tuple",
    options: [
       "List",
       "Tuple",
       "Dictionary",
       "Set",
    ]
  },
  {
    numb: 11,
    question: "As what data type are the *kwargs stored when passed into a function ?",
    answer: "Dictionary",
    options: [
       "Lists",
       "Tuples",
       "Dictionary",
       "None of the above",
    ]
  },




  {
    numb: 12,
    question: "Which of the following is not a valid set operation in python ?",
    answer: "None of the Above",
    options: [
       "Union",
       "Intersection",
       "Difference",
       "None of the Above",
    ]
  },

  {
    numb: 13,
    question: "create an empty set in python ?",
    answer: "set()",
    options: [
      "()",
      "{}",
      "[]",
      "set()",
    ]
  },



  {
    numb: 14,
    question: "www is based on which model?",
    answer: "Client-server",
    options: [
       "Local-server",
       "Client-server",
       "3-tier",
       "None of these",
    ]
  },



  {
    numb: 15,
    question: "Web pages starts with which of the following tag?",
    answer: "HTML",
    options: [
       "Body",
       "Title",
       "HTML",
       "Form",
    ]
  },


  {
    numb: 16,
    question: "Q16:What is output of print(math.pow(3,2)) ?",
    answer: "9.0",
    options: [
       "0.9",
       "9",
       "9.0",
       "9.00",
    ]
  },


  {
    numb: 17,
    question: "What is the method inside the class in python language ?",
    answer: "Function",
    options: [
       "Object",
       "Function",
       "Attribute",
       "Argumnet",
    ]
  },


  {
    numb: 18,
    question: "Which of the following data structures finds its use in recursion ?",
    answer: "Stack",
    options: [
      "Stack",
      "Array",
      "LinkedList",
      "Queues",
    ]
  },


  {
    numb: 19,
    question: "How is an array initialized in c language ?",
    answer: "int a[3] = {1,2,3}",
    options: [
       "int a[3] = {1,2,3}",
       "int a={1,2,3}",
       "int a[] = new int[3]",
       "int a(3) = [1,2,3]",
    ]
  },


  {
    numb: 20,
    question: "Which of the following is not the type of queue ?",
    answer: "Single-ended queue",
    options: [
       "Priority queue",
       "Single-ended queue",
       "Circular queue",
       "Ordinary queue",
    ]
  },


  {
    numb: 21,
    question: "How are String represented in memory in C?",
    answer: "An array of characters",
    options: [
       "An array of characters",
       "The object of some class",
       "Same as other primitive data type",
       "LinkedList of characters",
    ]
  },


  {
    numb: 22,
    question: "What is the default return type if it is not specified in function definition ?",
    answer: "int",
    options: [
       "void",
       "int",
       "double",
       "short int",
    ]
  },


  {
    numb: 23,
    question: "Which of the following correctly declares an array?",
    answer: "int array[10]",
    options: [
       "int array[10]",
       "int array",
       "array{10}",
       "array array[10]"
    ]
  },


  {
    numb: 24,
    question: "Which of the following is the default return value of functions in C++ ?",
    answer: "int",
    options: [
       "int",
       "char",
       "float",
       "void",
    ]
  },


  {
    numb: 25,
    question: "An inline function is expanded during ?",
    answer: "run-time",
    options: [
       "compile-time",
       "run-time",
       "never expanded",
       "end of the program",
    ]
  },









  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];