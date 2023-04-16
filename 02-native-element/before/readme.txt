1. create external-link.js

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

2. insert into index.html

<script src="driver-quote.js"></script>

3. add to attribute is="external-link" to a link, like

<li><a is="external-link" href="https://www.redbullracing.com">Red Bull</a></li>
