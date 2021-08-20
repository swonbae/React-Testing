import * as React from "react";
import { render } from "@testing-library/react";

import App from "./App";

test("renders the correct content", () => {
  const { getByText, getByLabelText } = render(<App />);

  // expect(getByText("TODOs")).not.toBeNull();
  // expect(getByLabelText("What needs to be done?")).not.toBeNull();
  // expect(getByText("Add #1")).not.toBeNull();

  // => Still works well without assertion commented above
  expect(getByText("TODOs"));
  expect(getByLabelText("What needs to be done?"));
  expect(getByText("Add #1"));
});
