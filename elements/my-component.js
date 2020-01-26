class Profile extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({
      mode: 'open',
    });
    shadowRoot.innerHTML = this.template;
  }

  get template() {
    return `
      <style>
        p {
          color: #f00;
        }
      </style>

      <p>This is a custom element!</p>
    `;
  }
}

customElements.define('my-component', Profile);
