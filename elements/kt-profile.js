class Profile extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({
      mode: 'open',
    });
  }

  connectedCallback() {
    const {
      'is-regular': { value: isRegular },
      name: { value: name },
      photo: { value: photo },
    } = this.attributes;

    const container = document.createElement('div');
    container.style.backgroundColor = !!isRegular ? 'red' : 'white';

    const span = document.createElement('span');
    span.appendChild(document.createTextNode(name));
    container.appendChild(span);

    const img = document.createElement('img');
    img.src = photo;
    container.appendChild(img);

    this.shadowRoot.appendChild(container);
  }
}

customElements.define('kt-profile', Profile);
