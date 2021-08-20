import * as React from "react";
import * as ReactDom from "react-dom";

import App from "./App";

test("renders the correct content", () => {
  // Render a React component to the DOM
  const root = document.createElement("div");
  ReactDom.render(<App />, root);

  // Use DOM APIs (querySelector)
  expect(root.querySelector("h1").textContent).toBe("TODOs");
  expect(root.querySelector("label").textContent).toBe(
    "What needs to be done?"
  );
  expect(root.querySelector("button").textContent).toBe("Add #1");
});
