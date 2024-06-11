// Mermaid.js
import React from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: true,
  theme: "default",
  securityLevel: "loose",
  themeCSS: `
    /* Your CSS styles here */
  `,
  fontFamily: "Fira Code",
});

export default class Mermaid extends React.Component {
  componentDidMount() {
    this.renderMermaid();
  }

  componentDidUpdate() {
    this.renderMermaid();
  }

  renderMermaid() {
    try {
      mermaid.contentLoaded();
      mermaid.init(undefined, ".mermaid"); // Initialize Mermaid again
    } catch (error) {
      // Handle errors silently
      console.error("Network Error:", error);
    }
  }

  render() {
    const { chart } = this.props;
    console.log(chart);
    return (
      <div key={chart} className="mermaid">
        {chart}
      </div>
    );
  }
}
