import React, { createRef } from "react";

class CanvasComponent extends React.Component {
  canvas = createRef("canvas");
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext("2d");
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 400, 400);
  }
  render() {
    return null;
  }
}

class WCC extends React.Component {
  render() {
    return (
      <>
        <CanvasComponent />
        <CanvasComponent />
        <canvas ref="canvas" width={500} height={500} />
      </>
    );
  }
}

export class App extends React.Component {
  render() {
    return <WCC />;
  }
}

export default App;
