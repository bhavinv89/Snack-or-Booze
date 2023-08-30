### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
   ### Its main purpose is to provide declarative routing to your application, allowing you to manage the URL and update the UI accordingly without the need for a full page reload. It helps you create a Single Page Application (SPA) experience where only parts of the page change while the overall page structure remains constant.###

- What is a single page application?
  #### A Single Page Application is a web application or website that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server. SPAs use client-side routing and JavaScript to update the content of the page while keeping the overall structure consistent###

- What are some differences between client side and server side routing?
   ### Client-Side Routing: This is the approach used in SPAs where the routing logic is handled on the client side using JavaScript. While a web applications, the routing logic is handled on the server side.###

- What are two ways of handling redirects with React Router? When would you use each?
  ### Using redirect component or using the history object ###

- What are two different ways to handle page-not-found user experiences using React Router? 
  ### Using a switch component or a creating a specific route for 404 ###

- How do you grab URL parameters from within a component using React Router?
  ### You can grab URL parameters using the useParams hook provided by React Router. ###
  
- What is context in React? When would you use it?
  ### Context in React is a way to share state or data between components without having to pass it explicitly through every level of the component tree. ###
- Describe some differences between class-based components and function
  components in React.
  #### State: Class components have state managed using the this.state object, while function components use the useState hook for state management. ###
  #### Lifecycle Methods: Class components use lifecycle methods like componentDidMount, componentDidUpdate, etc. Function components use hooks like useEffect for similar purposes. ###

- What are some of the problems that hooks were designed to solve?
  ### Reusability: Sharing stateful logic between components was difficult. ###
  ### Readability: Logic and concerns like data fetching were often scattered across different lifecycle methods.###