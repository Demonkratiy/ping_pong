import { PureComponent } from "react";
import { Context2D } from "../ctx";
import { Color } from "../settings";

export class Paddle extends PureComponent<Rect> {
  static contextType = Context2D;

  componentDidUpdate() {
    let ctx = this.context();

    ctx.fillStyle = Color.BLUE;
    ctx.fillRect(this.props.x, this.props.y, this.props.w, this.props.h);
  }

  render() {
    return null;
  }
}
