import React from "react";
import ReactDOM from "react-dom/client";

// ReactDOM.render(<h1>Hello world</h1>, document.getElementById("root"));

const heading = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Heading1"
);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading);
