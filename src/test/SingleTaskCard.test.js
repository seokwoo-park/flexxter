import Component from "../core/Component";
import SingleTaskCard from "../components/SingleTaskCard";

describe("", () => {
  const element = new SingleTaskCard();

  it("Should be instance of Component", () => {
    expect(element).toBeInstanceOf(Component);
  });

  it("Should render template", () => {
    expect(element.innerHTML).toContain(`<div class="task-wrapper"></div>`);
  });
});
