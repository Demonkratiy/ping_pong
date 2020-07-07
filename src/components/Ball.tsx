import { PureComponent } from "react";
import { Color } from "../settings";
import { Context2D } from "../ctx";

export class Ball extends PureComponent<Circ & { color: Color }> {
  static contextType = Context2D;

  componentDidUpdate() {
    let ctx = this.context();

    ctx.beginPath();
    ctx.fillStyle = this.props.color;
    ctx.arc(this.props.x, this.props.y, this.props.r, 0, Math.PI * 2);
    ctx.fill();
  }

  render() {
    return null;
  }
}
