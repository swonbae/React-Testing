import React from "react";
import Counter from "../Counter";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("header renders with correct text", () => {
  const { getByTestId } = render(<Counter />);
  const headerEl = getByTestId("header");

  expect(headerEl.textContent).toBe("My Counter");
});

test("Counter initially start with text of 0", () => {
  const { getByTestId } = render(<Counter />);
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");
});

test("input contains inital value of 1", () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId("input");

  expect(inputEl.value).toBe("1");
});

test("add button renders with +", () => {
  const { getByTestId } = render(<Counter />);
  const addBtn = getByTestId("add-btn");

  expect(addBtn.textContent).toBe("+");
});

test("subtract button renders with -", () => {
  const { getByTestId } = render(<Counter />);
  const subtractBtn = getByTestId("subtract-btn");

  expect(subtractBtn.textContent).toBe("-");
});

test("change value of input works correctly", () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId("input");

  expect(inputEl.value).toBe("1");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });

  expect(inputEl.value).toBe("5");
});

test("click on plus button adds 1 to counter", () => {
  const { getByTestId } = render(<Counter />);
  const addBtn = getByTestId("add-btn");
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");

  fireEvent.click(addBtn);

  expect(counterEl.textContent).toBe("1");
});

test("click on minus button subtracts 1 from counter", () => {
  const { getByTestId } = render(<Counter />);
  const subtractBtn = getByTestId("subtract-btn");
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");

  fireEvent.click(subtractBtn);

  expect(counterEl.textContent).toBe("-1");
});

test("changing input value then clicking on plus button works correctly", () => {
  const { getByTestId } = render(<Counter />);
  const addBtn = getByTestId("add-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });

  fireEvent.click(addBtn);

  expect(counterEl.textContent).toBe("5");
});

test("changing input value then clicking on minus button works correctly", () => {
  const { getByTestId } = render(<Counter />);
  const subtractBtn = getByTestId("subtract-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });

  fireEvent.click(subtractBtn);

  expect(counterEl.textContent).toBe("-5");
});

test("adding and then subtracting leads to the correct counter number", () => {
  const { getByTestId } = render(<Counter />);
  const addBtn = getByTestId("add-btn");
  const subtractBtn = getByTestId("subtract-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "10",
    },
  });

  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  fireEvent.click(subtractBtn);
  fireEvent.click(subtractBtn);

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });

  fireEvent.click(addBtn);
  fireEvent.click(subtractBtn);
  fireEvent.click(subtractBtn);

  expect(counterEl.textContent).toBe("15");
});