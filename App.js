import React from "react"
import ReactDOM from "react-dom/client"

const heading1 = React.createElement('h1', {}, 'Pravin')
const heading2 = React.createElement('h1', {}, 'Sharma')

const heading = React.createElement(
    "div",
    {
      id: "header"
    },
    [React.createElement('h1', {}, 'Pravin'),React.createElement('h1', {}, 'Sharma')]
  );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

//remove console log using babel
// keys in sibling elements
