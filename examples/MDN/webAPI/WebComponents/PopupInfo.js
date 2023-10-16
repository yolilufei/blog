class PopupInfo extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    this.createTree();
  }

  createTree() {
    const wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");
    const icon = document.createElement("span");
    icon.setAttribute("class", "icon");
    icon.setAttribute("tabindex", 0);
    const info = document.createElement("span");
    info.setAttribute("class", "info");

    // Take attribute content and put it inside the info span
    const text = this.getAttribute("data-text");
    info.textContent = text;

    // Insert icon
    const img = document.createElement("img");
    console.log(this, this.hasAttribute("img"));
    img.src = this.hasAttribute("img")
      ? this.getAttribute("img")
      : "./zihun.png";
    img.alt = this.hasAttribute("alt") ? this.getAttribute("alt") : "";
    icon.appendChild(img);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
    // this.createStyle();
    this.createExternalStyle();
    this.root.appendChild(wrapper);
  }

  createExternalStyle() {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'external.css');
    this.root.appendChild(link);
  }
  createStyle() {
    const style = document.createElement("style");
    style.textContent = `
        .wrapper {
        position: relative;
        top: 100px;
        left: 100px;
        }

        .info {
        font-size: 0.8rem;
        width: 200px;
        display: inline-block;
        border: 1px solid black;
        padding: 10px;
        background: white;
        border-radius: 10px;
        opacity: 0;
        transition: 0.6s all;
        position: absolute;
        bottom: 20px;
        left: 10px;
        z-index: 3;
        }

        img {
        width: 1.2rem;
        }

        .icon:hover + .info, .icon:focus + .info {
        opacity: 1;
        }`;
    this.root.appendChild(style);
  }
}

customElements.define('popup-info', PopupInfo);