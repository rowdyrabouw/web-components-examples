1. add to external-link.js

customElements.define("external-link", ExternalLink, { extends: "a" });

3. add to index.html

      <li><a is="external-link" href="https://f1.com">Formula One</a></li>
