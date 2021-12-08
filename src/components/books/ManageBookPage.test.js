import React from "react";
import { mount } from "enzyme";
import { authors, newBook, books } from "../../../tools/mockData";
import { ManageBookPage } from "./ManageBookPage";

function render(args) {
  const defaultProps = {
    authors,
    books,
    //   passed from ReactRouter in real app, so just stubbing in for test.
    // could also choose to use MemoryRouter as shown in Header.test.js
    // or even wrap w/ React Router, depending on wheter I
    // need to test React Router related behavior
    history: {},
    saveBook: jest.fn(),
    loadAuthors: jest.fn(),
    loadBooks: jest.fn(),
    book: newBook,
    match: {},
  };

  const props = { ...defaultProps, ...args };
  return mount(<ManageBookPage {...props} />);
  //   mount will render component and its children in memory
}

it("sets error when attempting to save an empty title field", () => {
  const wrapper = render();
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".alert").first();
  expect(error.text()).toBe("Title is required.");
});
