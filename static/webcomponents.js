class DenoVersionSelector extends HTMLElement {
  constructor() {
    super();
    const children = [...this.children];
    this.attachShadow({ mode: "open" });
    this.select = document.createElement("select");
    for (const child of children) {
      const option = document.createElement("option");
      option.value = child.getAttribute("value");
      option.selected = child.getAttribute("selected") === "";
      option.setAttribute("href", child.getAttribute("href"));
      option.textContent = child.textContent;
      this.select.appendChild(option);
    }
    this.shadowRoot.appendChild(this.select);
  }

  connectedCallback() {
    this.select.addEventListener("change", () => {
      const href = this.select.selectedOptions.item(0).getAttribute("href");
      window.location.href = href;
    });
  }
}

customElements.define("deno-version-selector", DenoVersionSelector);
