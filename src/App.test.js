import * as React from "react";
import { render, fireEvent } from "@testing-library/react";

import App from "./App";

test("renders the correct content", () => {
  const { getByText, getByLabelText } = render(<App />);

  expect(getByText("TODOs"));
  expect(getByLabelText("What needs to be done?"));
  expect(getByText("Add #1"));
});

test("allows users to add items to their list", () => {
  const { getByText, getByLabelText } = render(<App />);

  const input = getByLabelText("What needs to be done?");
  fireEvent.change(input, { target: { value: "RTL Presentation Slides" } });
  fireEvent.click(getByText("Add #1"));

  getByText("RTL Presentation Slides");
  getByText("Add #2");
});
