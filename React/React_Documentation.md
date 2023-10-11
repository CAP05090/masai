What is React?
    The React is JavaScript library for building user interfaces (UIs)
    It lets you compose complex UIs from small and isolated pieces of code
    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
    It lets you compose complex UIs from small and isolated pieces of code

Who made React?
    Jordan Walke made React, A software engineer at Facebook.
    He was inspired by the functional programming language Lisp and sought.

What is Babel?
    Bable is widely-used JavaScript Compiler.
    It allows developers to write modern javascript code and transpile it.
    In Babel Transpiler is a tool that convert modern JavaScript code in to a version that works with all Browsers.
    
How does Babel convert html code in React into valid code?
    Bable converts HTML Vode into a valid code by using JavaScript XML (JSX) and converter.
    Bable converts Html like code in JS by using JSX that can modern code run in all modern and older version of browsers.

What is ReactDOM used for? Write an example?
    ReactDOM is used to render components and elements on the web.
    ReactDOM is like a bridge between React elements and actual DOM elements. Its job is to take the React elements and convert them into real DOM elements that get rendered on the page.
    It is a part of React library used to create user interfaces (UIs) and dynamic web application, 
    As well as resuable and composable components that can be used in different applications.
    Example: 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Create UI with React API</title>
    </head>
    <body>
        <div id="root"></div>
        <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script> // add react
        <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script> // add ReactDOM
        <script>
            const rootElement = document.getElementById("root") 
            const element = React.createElement("div", {        
                className: "container",
                children: "Carpe Diem",
            })                                                  // React and React.createElement
            const reactRoot = ReactDOM.createRoot(rootElement)  // ReactDOM
            reactRoot.render(element)                           // ReactDOM.render
        </script>
    </body>
    </html>

What are the packages that you need to import for react to work with?
    There are two package that we need to import to use the react,
    1.React:- "https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"
    2.ReactDOM:- "https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"

How do you add react to a web application?
    There are few step to add React to web application,
    Step1: - Set up a modular JavaScript Environment that lets we use the JSX syntax, split your code into modules with export/import syntax, and use package.
    Step2: - Render React component where we want to see them on web page.

What is React.createElement?
    React.createElement is the syntax of creating and return a new React elements of given type.
    Sntax: - 
        React. createElement( type, [props], [... children] )

What are the three properties that createElement accept?
    Three properties that createElement accepts are :
    type: - The type se have passed (p, h1-h6, div, a, etc.)
    props: - The props you have passed except for ref and key. If the type is a component with legacy type.defaultProps, then any missing or undefined props will get the values from type.defaultProps.
    ref: - The ref you have passed. If missing, null.
    key: - The key you have passed, coerced to a string. If missing, null.

What is the meaning of render and root?
    Render: - 
        In React, Render is the technique that can redirect a page with the help of function render().
        The purpose of the function is to display the specified HTML code inside the specified HTML element.
        In the render() method, we can read props and state and return our JSX code to the root component of our app.
    Root: - 
        The root is where the application layout structure is defined. 
        It is typically the first UI element a user interacts with.
        The root can be changed multiple times during the lifespan of the application
        in React, the root element refers to the top level of element that is the parent of all other component in our application.