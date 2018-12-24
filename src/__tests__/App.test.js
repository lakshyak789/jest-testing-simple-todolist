import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../container/App";
configure({ adapter: new Adapter() });
const app = shallow(<App />);
describe("App component", () => {
  it("should render properly", () => {
    expect(app).toMatchSnapshot();
  });
  describe("on click of add button with no value", () => {
    const text = "";
    beforeEach(() => {
      app.find(".text-box").simulate("change", { target: { value: text } });
      app.find(".add-todo").simulate("click");
    });
    it("should not let change the value of state", () => {
      expect(app.state().todos).toEqual([]);
    });
  });
  describe("on click of add button with value", () => {
    const text = "google";
    const todos = [{ id: 1, text }];
    beforeEach(() => {
      app.find(".text-box").simulate("change", { target: { value: text } });
      app.find(".add-todo").simulate("click");
    });
    it("should add the item to the state", () => {
      expect(app.state().todos).toEqual(todos);
    });
  });
  describe("on click of remove button", () => {
    beforeEach(() => {
      app.find(".remove-item").simulate("click", { target: { id: 1 } });
    });
    it("should remove the item from the list", () => {
      expect(app.state().todos).toEqual([]);
    });
  });
});
