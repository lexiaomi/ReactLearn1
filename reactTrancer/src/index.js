import React from "react";
import  ReactDOM from "react-dom/client";

// import App from './todolist'
import Option  from './Option'

// react18之前写法
// ReactDOM.render(<App></App>,document.getElementById("root"))

// react18之后写法
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Option />);
