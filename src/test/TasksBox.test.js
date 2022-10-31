import TasksBox from "../components/TasksBox";
import Component from "../core/Component";

it("Should be instance of Component", () => {
  const element = new TasksBox();
  expect(element).toBeInstanceOf(Component);
});
