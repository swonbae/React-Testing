import App from "./App";
import { shallow } from "enzyme";
import PersonList from "./PersonList";

describe("App", () => {
  it("renders without crashing", () => {
    const appWrapper = shallow(<App />);
  });

  it("renders a person list", () => {
    const appWrapper = shallow(<App />);
    const personList = appWrapper.find(PersonList);

    expect(personList).toHaveLength(1);
  });

  it("has state", () => {
    const appWrapper = shallow(<App />);
    const appState = appWrapper.state();

    expect(appState).not.toBeNull();
  });

  it("has a people property on state", () => {
    const appWrapper = shallow(<App />);
    const appState = appWrapper.state();

    expect(appState.people).toBeDefined();
  });
});
