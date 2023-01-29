const heading1 = React.createElement('h1', {key:1}, 'Pravin')
const heading2 = React.createElement('h1', {key:2}, 'Sharma')
const heading = React.createElement(
    "div",
    {
      id: "header"
    },
    [heading1, heading2]
  );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
