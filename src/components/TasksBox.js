import Component from "../core/Component.js";
import { fetchTasks } from "../../api/tasks.js";
import SingleTaskCard from "./SingleTaskCard.js";
import { TASK_BOX_TEMPLATE_STYLE } from "../styles/TasksBox.style.js";

export default class TasksBox extends Component {
  getTemplate() {
    return `
      <div class="tasks__container">
        <h2 class="tasks__heading">Tasks</h2>
        <div class="tasks__item__wrapper"></div>
      </div>

      ${TASK_BOX_TEMPLATE_STYLE}
        `;
  }

  connectedCallback() {
    fetchTasks()
      .then((res) => JSON.parse(res))
      .then(({ tasks }) => (this.items = tasks))
      .then(() => this.renderList());
  }

  renderList() {
    this.querySelector(".tasks__item__wrapper").innerHTML = `
                ${this.items
                  .map(
                    (item, index) =>
                      `<single-task-card task='${JSON.stringify(
                        item
                      )}'></single-task-card>`
                  )
                  .join("")}
        `;
  }
}

customElements.get("tasks-box") ?? customElements.define("tasks-box", TasksBox);
