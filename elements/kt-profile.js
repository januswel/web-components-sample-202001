class Profile extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({
      mode: 'open',
    });

    const tree = this.template;
    const {
      'is-regular': { value: isRegular },
      name: { value: name },
      photo: { value: photo },
    } = this.attributes;

    const containerStyle = `background-color: ${!!isRegular ? 'red' : 'white'};`;
    shadowRoot.innerHTML = tree
      .replace('$containerStyle', containerStyle)
      .replace('$name', name)
      .replace('$photo', photo);
  }

  get template() {
    return `
      <div style="$containerStyle">
        <span>$name</span>
        <img src="$photo" />
      </div>
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
