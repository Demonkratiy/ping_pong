import React from "react";

class CanvasComponent extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext("2d");
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 400, 400);
  }
  render() {
    return <canvas ref="canvas" width={500} height={500} />;
  }
}

class WCC extends React.Component {
  render() {
    return (
      <>
        <CanvasComponent />
        <CanvasComponent />
      </>
    );
  }
}

class App extends React.Component {
  render() {
    return <WCC />;
  }
}

export default App;
