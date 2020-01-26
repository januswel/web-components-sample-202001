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
      <div>
        <span />
      </div>
    `;
  }

  connectedCallback() {
    const {
      'is-regular': { value: isRegular },
      name: { value: name },
      photo: { value: photo },
    } = this.attributes;

    const containerStyle = `background-color: ${!!isRegular ? 'red' : 'white'};`;
    const container = this.shadowRoot.querySelector('div');
    container.style = containerStyle;

    container.querySelector('span').innerText = name;

    const img = document.createElement('img');
    img.setAttribute('src', photo);
    container.appendChild(img);
  }
}

customElements.define('kt-profile', Profile);
