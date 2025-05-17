import { Question } from '../types';

export const questionPool: Question[] = [
  // JavaScript - Easy
  {
    id: 'js-easy-1',
    text: 'What will console.log(typeof []) output?',
    topic: 'javascript',
    difficulty: 'easy',
    options: [
      { id: 'a', text: '"array"', isCorrect: false },
      { id: 'b', text: '"object"', isCorrect: true },
      { id: 'c', text: '"undefined"', isCorrect: false },
      { id: 'd', text: '"function"', isCorrect: false }
    ],
    explanation: 'In JavaScript, arrays are objects, so typeof [] returns "object".'
  },
  {
    id: 'js-easy-2',
    text: 'Which method is used to add an element to the end of an array?',
    topic: 'javascript',
    difficulty: 'easy',
    options: [
      { id: 'a', text: 'push()', isCorrect: true },
      { id: 'b', text: 'pop()', isCorrect: false },
      { id: 'c', text: 'unshift()', isCorrect: false },
      { id: 'd', text: 'shift()', isCorrect: false }
    ],
    explanation: 'The push() method adds one or more elements to the end of an array and returns the new length of the array.'
  },
  
  // JavaScript - Medium
  {
    id: 'js-medium-1',
    text: 'What does the following code return? [1, 2, 3].map(n => n * 2)',
    topic: 'javascript',
    difficulty: 'medium',
    options: [
      { id: 'a', text: '[1, 2, 3]', isCorrect: false },
      { id: 'b', text: '[2, 4, 6]', isCorrect: true },
      { id: 'c', text: '[1, 4, 9]', isCorrect: false },
      { id: 'd', text: '[3, 6, 9]', isCorrect: false }
    ],
    explanation: 'The map() method creates a new array with the results of calling a function for every array element. Here, each element is multiplied by 2.'
  },
  {
    id: 'js-medium-2',
    text: 'What is the output of console.log(2 + "2")?',
    topic: 'javascript',
    difficulty: 'medium',
    options: [
      { id: 'a', text: '4', isCorrect: false },
      { id: 'b', text: '"22"', isCorrect: true },
      { id: 'c', text: '"4"', isCorrect: false },
      { id: 'd', text: 'NaN', isCorrect: false }
    ],
    explanation: 'In JavaScript, when you add a number and a string, JavaScript will convert the number to a string and concatenate them.'
  },
  
  // JavaScript - Hard
  {
    id: 'js-hard-1',
    text: 'What is the output of the following code?\n\nfunction foo() {\n  return {\n    bar: "hello"\n  };\n}',
    topic: 'javascript',
    difficulty: 'hard',
    options: [
      { id: 'a', text: 'undefined', isCorrect: false },
      { id: 'b', text: '{ bar: "hello" }', isCorrect: true },
      { id: 'c', text: 'SyntaxError', isCorrect: false },
      { id: 'd', text: '"hello"', isCorrect: false }
    ],
    explanation: 'The function foo returns an object with a property "bar" that has the value "hello".'
  },
  {
    id: 'js-hard-2',
    text: 'What does the following code do?\n\nconst obj = { a: 1 };\nconst copy = { ...obj };\nobj.a = 2;\nconsole.log(copy.a);',
    topic: 'javascript',
    difficulty: 'hard',
    options: [
      { id: 'a', text: 'Logs 1', isCorrect: true },
      { id: 'b', text: 'Logs 2', isCorrect: false },
      { id: 'c', text: 'Logs undefined', isCorrect: false },
      { id: 'd', text: 'Throws an error', isCorrect: false }
    ],
    explanation: 'The spread operator (...) creates a shallow copy of the object. When obj.a is changed to 2, copy.a remains 1 because they are separate objects.'
  },
  
  // React - Easy
  {
    id: 'react-easy-1',
    text: 'What is JSX in React?',
    topic: 'react',
    difficulty: 'easy',
    options: [
      { id: 'a', text: 'A JavaScript library', isCorrect: false },
      { id: 'b', text: 'A syntax extension for JavaScript that allows writing HTML in React', isCorrect: true },
      { id: 'c', text: 'A database query language', isCorrect: false },
      { id: 'd', text: 'A React component', isCorrect: false }
    ],
    explanation: 'JSX is a syntax extension for JavaScript that looks similar to HTML and allows you to create React elements in a more intuitive way.'
  },
  {
    id: 'react-easy-2',
    text: 'In React, how do you pass data from a parent component to a child component?',
    topic: 'react',
    difficulty: 'easy',
    options: [
      { id: 'a', text: 'Using props', isCorrect: true },
      { id: 'b', text: 'Using state', isCorrect: false },
      { id: 'c', text: 'Using Redux', isCorrect: false },
      { id: 'd', text: 'Using context', isCorrect: false }
    ],
    explanation: 'Props (short for properties) are used to pass data from a parent component to a child component in React.'
  },
  
  // React - Medium
  {
    id: 'react-medium-1',
    text: 'What is the purpose of useState in React?',
    topic: 'react',
    difficulty: 'medium',
    options: [
      { id: 'a', text: 'To define CSS styles', isCorrect: false },
      { id: 'b', text: 'To add state to functional components', isCorrect: true },
      { id: 'c', text: 'To create new components', isCorrect: false },
      { id: 'd', text: 'To handle routing', isCorrect: false }
    ],
    explanation: 'useState is a Hook in React that lets you add state to functional components. It returns a stateful value and a function to update it.'
  },
  {
    id: 'react-medium-2',
    text: 'What is the purpose of the useEffect Hook in React?',
    topic: 'react',
    difficulty: 'medium',
    options: [
      { id: 'a', text: 'To handle state in class components', isCorrect: false },
      { id: 'b', text: 'To create side effects in functional components', isCorrect: true },
      { id: 'c', text: 'To create custom hooks', isCorrect: false },
      { id: 'd', text: 'To optimize rendering performance', isCorrect: false }
    ],
    explanation: 'useEffect lets you perform side effects in functional components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React class components.'
  },
  
  // React - Hard
  {
    id: 'react-hard-1',
    text: 'What problem does React.memo solve?',
    topic: 'react',
    difficulty: 'hard',
    options: [
      { id: 'a', text: 'Memory leaks', isCorrect: false },
      { id: 'b', text: 'State management complexity', isCorrect: false },
      { id: 'c', text: 'Unnecessary re-renders', isCorrect: true },
      { id: 'd', text: 'Server-side rendering issues', isCorrect: false }
    ],
    explanation: 'React.memo is a higher-order component that memoizes the result of a function component. It prevents unnecessary re-renders when the props have not changed.'
  },
  {
    id: 'react-hard-2',
    text: 'In React, what is the correct way to update an object in state?',
    topic: 'react',
    difficulty: 'hard',
    options: [
      { id: 'a', text: 'setState(prevState => ({ ...prevState, propertyToUpdate: newValue }))', isCorrect: true },
      { id: 'b', text: 'setState(prevState => { prevState.propertyToUpdate = newValue; return prevState; })', isCorrect: false },
      { id: 'c', text: 'setState(prevState.propertyToUpdate = newValue)', isCorrect: false },
      { id: 'd', text: 'setState({ propertyToUpdate: newValue })', isCorrect: false }
    ],
    explanation: 'State in React should be treated as immutable. When updating an object in state, you should create a new object using the spread operator (...) and then update the property you want to change.'
  },
  
  // TypeScript - Easy
  {
    id: 'ts-easy-1',
    text: 'What is the main purpose of TypeScript?',
    topic: 'typescript',
    difficulty: 'easy',
    options: [
      { id: 'a', text: 'To make JavaScript run faster', isCorrect: false },
      { id: 'b', text: 'To add static typing to JavaScript', isCorrect: true },
      { id: 'c', text: 'To replace JavaScript completely', isCorrect: false },
      { id: 'd', text: 'To provide better browser compatibility', isCorrect: false }
    ],
    explanation: 'TypeScript is a superset of JavaScript that adds static type definitions. It helps catch errors during development rather than at runtime.'
  },
  {
    id: 'ts-easy-2',
    text: 'How do you declare a variable of type string in TypeScript?',
    topic: 'typescript',
    difficulty: 'easy',
    options: [
      { id: 'a', text: 'let name = String;', isCorrect: false },
      { id: 'b', text: 'let name: string;', isCorrect: true },
      { id: 'c', text: 'let name = "string";', isCorrect: false },
      { id: 'd', text: 'let name: String;', isCorrect: false }
    ],
    explanation: 'In TypeScript, you declare a variable of type string using the syntax: let variableName: string;'
  },
  
  // TypeScript - Medium
  {
    id: 'ts-medium-1',
    text: 'What is the purpose of an interface in TypeScript?',
    topic: 'typescript',
    difficulty: 'medium',
    options: [
      { id: 'a', text: 'To define a class template', isCorrect: false },
      { id: 'b', text: 'To describe object shapes', isCorrect: true },
      { id: 'c', text: 'To create function closures', isCorrect: false },
      { id: 'd', text: 'To handle asynchronous operations', isCorrect: false }
    ],
    explanation: 'Interfaces in TypeScript are used to define the structure of objects, ensuring that objects implementing the interface have the required properties and methods.'
  },
  {
    id: 'ts-medium-2',
    text: 'What is a type assertion in TypeScript?',
    topic: 'typescript',
    difficulty: 'medium',
    options: [
      { id: 'a', text: 'A way to assert that a condition is true', isCorrect: false },
      { id: 'b', text: 'A way to convert between types', isCorrect: true },
      { id: 'c', text: 'A way to check if a value is null', isCorrect: false },
      { id: 'd', text: 'A way to declare immutable variables', isCorrect: false }
    ],
    explanation: 'Type assertions in TypeScript allow you to tell the compiler to treat a value as a specific type. It does not perform any special checking or restructuring but is simply a way to let TypeScript know how to treat a value.'
  },
  
  // TypeScript - Hard
  {
    id: 'ts-hard-1',
    text: 'What is the purpose of the "never" type in TypeScript?',
    topic: 'typescript',
    difficulty: 'hard',
    options: [
      { id: 'a', text: 'To denote a null value', isCorrect: false },
      { id: 'b', text: 'To represent functions that never return', isCorrect: true },
      { id: 'c', text: 'To indicate optional parameters', isCorrect: false },
      { id: 'd', text: 'To create mutable constants', isCorrect: false }
    ],
    explanation: 'The "never" type in TypeScript represents values that never occur. It is used for functions that never return (e.g., they throw an exception or have an infinite loop) or variables that can never have a value.'
  },
  {
    id: 'ts-hard-2',
    text: 'What are conditional types in TypeScript?',
    topic: 'typescript',
    difficulty: 'hard',
    options: [
      { id: 'a', text: 'Types that depend on a condition', isCorrect: true },
      { id: 'b', text: 'Types that store boolean values', isCorrect: false },
      { id: 'c', text: 'Types that handle if-else statements', isCorrect: false },
      { id: 'd', text: 'Types that change during runtime', isCorrect: false }
    ],
    explanation: 'Conditional types in TypeScript select one of two possible types based on a condition. They have the form: T extends U ? X : Y, which means "if T is assignable to U, use X, otherwise use Y".'
  },
  
  // CSS - Easy to Hard Examples
  {
    id: 'css-easy-1',
    text: 'Which property is used to change the text color in CSS?',
    topic: 'css',
    difficulty: 'easy',
    options: [
      { id: 'a', text: 'text-color', isCorrect: false },
      { id: 'b', text: 'color', isCorrect: true },
      { id: 'c', text: 'font-color', isCorrect: false },
      { id: 'd', text: 'text-style', isCorrect: false }
    ],
    explanation: 'The "color" property is used to set the color of text in CSS.'
  },
  
  {
    id: 'css-medium-1',
    text: 'What is the CSS box model?',
    topic: 'css',
    difficulty: 'medium',
    options: [
      { id: 'a', text: 'A layout model for 3D elements', isCorrect: false },
      { id: 'b', text: 'A property for creating boxes', isCorrect: false },
      { id: 'c', text: 'A concept that describes how elements are structured with content, padding, border, and margin', isCorrect: true },
      { id: 'd', text: 'A method for aligning boxes on a page', isCorrect: false }
    ],
    explanation: 'The CSS box model is a fundamental concept that describes how elements are rendered as boxes with content, padding, border, and margin layers.'
  },
  
  {
    id: 'css-hard-1',
    text: 'What is the effect of the following CSS property: "position: sticky"?',
    topic: 'css',
    difficulty: 'hard',
    options: [
      { id: 'a', text: 'The element is removed from the normal document flow', isCorrect: false },
      { id: 'b', text: 'The element behaves like "relative" until it crosses a threshold, then behaves like "fixed"', isCorrect: true },
      { id: 'c', text: 'The element becomes hidden until scrolled into view', isCorrect: false },
      { id: 'd', text: 'The element cannot be moved with top, right, bottom, or left properties', isCorrect: false }
    ],
    explanation: 'The "position: sticky" value acts like "position: relative" until the element crosses a specified threshold, at which point it acts like "position: fixed".'
  },
  
  // HTML - Easy to Hard Examples
  {
    id: 'html-easy-1',
    text: 'What does HTML stand for?',
    topic: 'html',
    difficulty: 'easy',
    options: [
      { id: 'a', text: 'Hyper Text Markup Language', isCorrect: true },
      { id: 'b', text: 'Hyperlinks and Text Markup Language', isCorrect: false },
      { id: 'c', text: 'Home Tool Markup Language', isCorrect: false },
      { id: 'd', text: 'Hyper Transfer Markup Language', isCorrect: false }
    ],
    explanation: 'HTML stands for Hyper Text Markup Language, which is the standard markup language for creating web pages.'
  },
  
  {
    id: 'html-medium-1',
    text: 'What is the purpose of the <meta> tag in HTML?',
    topic: 'html',
    difficulty: 'medium',
    options: [
      { id: 'a', text: 'To create navigation menus', isCorrect: false },
      { id: 'b', text: 'To display images', isCorrect: false },
      { id: 'c', text: 'To provide metadata about the HTML document', isCorrect: true },
      { id: 'd', text: 'To define animations', isCorrect: false }
    ],
    explanation: 'The <meta> tag provides metadata about the HTML document, such as character set, description, keywords, author, and viewport settings.'
  },
  
  {
    id: 'html-hard-1',
    text: 'What is the purpose of the "srcset" attribute in the <img> tag?',
    topic: 'html',
    difficulty: 'hard',
    options: [
      { id: 'a', text: 'To specify multiple sources for video elements', isCorrect: false },
      { id: 'b', text: 'To provide different image sources for different device pixel ratios or viewport sizes', isCorrect: true },
      { id: 'c', text: 'To set the source of an iframe', isCorrect: false },
      { id: 'd', text: 'To create a slideshow of images', isCorrect: false }
    ],
    explanation: 'The "srcset" attribute allows you to specify multiple image files with different resolutions or sizes, and the browser will choose the most appropriate one based on the device and viewport.'
  },
  
  // Computer Science - Various Difficulties
  {
    id: 'cs-easy-1',
    text: 'What does CPU stand for?',
    topic: 'computerScience',
    difficulty: 'easy',
    options: [
      { id: 'a', text: 'Central Processing Unit', isCorrect: true },
      { id: 'b', text: 'Computer Personal Unit', isCorrect: false },
      { id: 'c', text: 'Central Program Utility', isCorrect: false },
      { id: 'd', text: 'Control Processing Unit', isCorrect: false }
    ],
    explanation: 'CPU stands for Central Processing Unit, which is the primary component of a computer that performs most of the processing.'
  },
  
  {
    id: 'cs-medium-1',
    text: 'What is the time complexity of binary search?',
    topic: 'computerScience',
    difficulty: 'medium',
    options: [
      { id: 'a', text: 'O(n)', isCorrect: false },
      { id: 'b', text: 'O(log n)', isCorrect: true },
      { id: 'c', text: 'O(n log n)', isCorrect: false },
      { id: 'd', text: 'O(n²)', isCorrect: false }
    ],
    explanation: 'Binary search has a time complexity of O(log n) because it divides the search interval in half with each step.'
  },
  
  {
    id: 'cs-hard-1',
    text: 'What is the CAP theorem in distributed systems?',
    topic: 'computerScience',
    difficulty: 'hard',
    options: [
      { id: 'a', text: 'A theorem about CPU architecture performance', isCorrect: false },
      { id: 'b', text: 'A theorem stating that a distributed system cannot simultaneously provide Consistency, Availability, and Partition tolerance', isCorrect: true },
      { id: 'c', text: 'A theorem about compiler optimization', isCorrect: false },
      { id: 'd', text: 'A theorem for calculating algorithmic complexity', isCorrect: false }
    ],
    explanation: 'The CAP theorem states that a distributed data store can only provide two out of three guarantees: Consistency, Availability, and Partition tolerance.'
  }
];