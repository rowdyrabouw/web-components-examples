1. add to external-link.js

customElements.define("external-link", ExternalLink, { extends: "a" });

2. add to attribute is="external-link" to a link, like

<li><a is="external-link" href="https://www.redbullracing.com">Red Bull</a></li>
