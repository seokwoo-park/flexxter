import TasksBox from "./components/TasksBox.js";
import Component from "./core/Component.js";

export default class MainApp extends Component {
  getTemplate() {
    return `
            <tasks-box class="main-container"></tasks-box>
        `;
  }
}

customElements.get("main-app") ?? customElements.define("main-app", MainApp);
