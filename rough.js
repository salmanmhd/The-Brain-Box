const response = {
  result:
    '{"questions": [{"question": "Explain the concept of reconciliation in React and how it optimizes the DOM updates.", "options": ["React uses a virtual DOM to track changes, and only updates the actual DOM when necessary. This process is called reconciliation.", "React directly manipulates the DOM, which is why it\'s so efficient.", "Reconciliation is a process of comparing two different components and merging their states.", "Reconciliation is a process of removing unnecessary components from the DOM."], "correctOption": 0, "points": 20}, {"question": "What are the different ways to optimize performance in a React application, and when would you use each technique?", "options": ["Using memoization, code splitting, lazy loading, and avoiding unnecessary re-renders.", "Using a different framework altogether.", "Writing more efficient JavaScript code.", "Using a faster internet connection."], "correctOption": 0, "points": 20}, {"question": "Describe the differences between `useState` and `useReducer` hooks and provide examples of when you would use each.", "options": ["`useState` is for simple state updates, while `useReducer` is for more complex state logic with multiple actions.  `useReducer` is better for managing state that involves multiple sub-states or complex state transitions.", "`useState` is for managing asynchronous state, and `useReducer` is for synchronous state.", "`useState` is for managing component state, and `useReducer` is for managing global state.", "There is no difference; they are interchangeable."], "correctOption": 0, "points": 20}, {"question": "Explain how to implement code splitting in a React application and its benefits for performance.", "options": ["Code splitting involves breaking down your application into smaller chunks of code that are loaded on demand. This improves initial load time and reduces the amount of JavaScript that needs to be parsed and executed.", "Code splitting is a process of removing unnecessary code from your application.", "Code splitting is a process of combining multiple code files into one.", "Code splitting is only relevant for server-side rendering."], "correctOption": 0, "points": 20}, {"question": "Discuss advanced React concepts like higher-order components (HOCs), render props, and hooks, and explain their use cases and trade-offs.", "options": ["HOCs are functions that take a component and return a new enhanced component. Render props provide a function as a prop to a component, allowing you to customize its rendering logic. Hooks are functions that let you \\"hook into\\" React state and lifecycle features from functional components. Each has its own strengths and weaknesses in terms of code organization, reusability, and readability.", "These concepts are outdated and should not be used in modern React development.", "HOCs are only used for class components, while hooks are only used for functional components.", "There are no significant differences between these concepts; they are essentially interchangeable."], "correctOption": 0, "points": 20}]}',
};

// First, extract the string
const jsonString = response.result;

// Second, parse it into JSON
const parsedJson = JSON.parse(jsonString);

console.log(parsedJson);
