import { saveTasks } from "../../api/tasks.js";
import Component from "../core/Component.js";
import { SINGLE_RENDER_LIST_STYLE } from "../styles/SingleTaskCard.style.js";

export default class SingleTaskCard extends Component {
  getTemplate() {
    return `
            <div class="task-wrapper"></div>
        `;
  }

  disconnectedCallback() {
    // unmounted
    this.removeEventListener();
  }

  loadData(taskData) {
    if (!taskData) return;

    const { id, title, checked, description } = JSON.parse(taskData);

    this.taskID = id;
    this.taskTitle = title;
    this.isChecked = checked;
    this.description = description;
  }

  static get observedAttributes() {
    return ["task", "isChecked"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "task") {
      console.log("task fetched");
      this.loadData(newValue);
    }

    this.renderList();
  }

  renderList() {
    this.querySelector(".task-wrapper").innerHTML = `

    <label>
      <input type="checkbox" ${this.isChecked && "checked"} id='${
      this.taskID
    }'></input>
      <span>${this.isChecked ? "Complete" : "Not yet"}</span>
    </label>

    <div>
      <h3 class="task-wrapper__title">${this.taskTitle}</h3>
      <p class="task-wrapper__desc">${this.description}</p>
    </div>

    ${SINGLE_RENDER_LIST_STYLE}
    `;

    this.addEventListener();
  }

  addEventListener() {
    const checkBoxElement = document.getElementById(this.taskID);

    checkBoxElement.addEventListener("click", async (e) => {
      const { id, checked } = e.target;

      const data = {
        projectID: Math.floor(Math.random() * 1000),
        taskID: Number(id),
        checked,
      };

      checkBoxElement.setAttribute("disabled", "");
      try {
        const res = await saveTasks(data);
        if (JSON.parse(res).status === "success") {
          this.isChecked = checked;
        }
      } catch (error) {
        console.log(error);
      } finally {
        checkBoxElement.removeAttribute("disabled", "");
        this.renderList();
      }
    });
  }
}

customElements.get("single-task-card") ??
  customElements.define("single-task-card", SingleTaskCard);
