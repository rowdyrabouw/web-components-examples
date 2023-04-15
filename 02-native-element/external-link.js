class ExternalLink extends HTMLAnchorElement {
  constructor() {
    super();
    this.addEventListener("click", (e) => {
      if (
        !confirm(`You are about to navigate to another website.
                  \nDo you want to continue?`)
      ) {
        e.preventDefault();
      }
    });
  }
}

customElements.define("external-link", ExternalLink, { extends: "a" });
