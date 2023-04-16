1. add :root to style
    <style>
      :root {
        --primary-color: green;
      }
      p {
        color: var(--primary-color);
      }
    </style>

2. add :host and reformat
template.innerHTML = `
<style>
  :host {
    --primary-color: blue;
  }
  p { 
    color: var(--primary-color);
  }</style>

  <p>"Woah! There's a giant lizard on the track!" 
&mdash; Max Verstappen</p>
`;