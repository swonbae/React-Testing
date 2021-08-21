import React from "react";
import { shallow } from "enzyme";
import PersonList from "./PersonList";

describe("PersonList", () => {
  let personListWrapper;

  it("renders a ul elemnet", () => {
    personListWrapper = shallow(<PersonList />);
    const peopleListUl = personListWrapper.find("ul");

    expect(peopleListUl).toHaveLength(1);
  });

  it("renders no li elemnets when no people exist", () => {
    const people = [];
    personListWrapper = shallow(<PersonList people={people} />);
    const peopleListItems = personListWrapper.find("li");

    expect(peopleListItems).toHaveLength(0);

    // // one-line code same as above
    // expect(shallow(<PersonList people={[]} />).find('li')).toHaveLength(0)
  });

  it("renders one li element when one person exists", () => {
    const people = [{ firstName: "Alan", lastName: "Turing" }];
    personListWrapper = shallow(<PersonList people={people} />);
    const peopleListItems = personListWrapper.find("li");

    expect(peopleListItems).toHaveLength(1);
  });

  it("renders one li element for each person that exists", () => {
    const people = [
      { firstName: "Alan", lastName: "Turing" },
      { firstName: "Chevy", lastName: "Chase" },
    ];
    personListWrapper = shallow(<PersonList people={people} />);
    const peopleListItems = personListWrapper.find("li");

    expect(peopleListItems).toHaveLength(2);
  });

  it("renders the first and last name of a person", () => {
    const people = [{ firstName: "Jane", lastName: "Curtin" }];
    personListWrapper = shallow(<PersonList people={people} />);
    const peopleListItems = personListWrapper.find("li");

    expect(peopleListItems.text()).toContain(people[0].firstName);
    expect(peopleListItems.text()).toContain(people[0].lastName);
  });
});
