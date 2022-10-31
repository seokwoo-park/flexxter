export default class Component extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = this.getTemplate();
  }

  getTemplate() {
    return "";
  }

  connectedCallback() {}

  disconnectedCallback() {}

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(name, oldValue, newValue) {}
}
