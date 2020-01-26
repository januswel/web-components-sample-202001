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
      <p>This is a custom element!</p>
    `;
  }

  connectedCallback() {
    console.log('connectedCallback');
  }
  disconnectedCallback() {
    console.log('disconnectedCallback');
  }
  adoptedCallback() {
    console.log('adoptedCallback');
  }
  attributeChangedCallback(name, oldValue, newValue) {
    console.log('attributeChangedCallback:', name, oldValue, newValue);
  }
}

customElements.define('kt-profile', Profile);
