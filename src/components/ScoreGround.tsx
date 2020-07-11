import { PureComponent } from "react";
import { Context2D } from "../ctx";
import { Color } from "../settings";

export class ScoreGround extends PureComponent<Rect & { color: Color }> {
  static contextType = Context2D;

  componentDidUpdate() {
    let ctx = this.context();

    ctx.beginPath();
    ctx.rect(this.props.x, this.props.y, this.props.w, this.props.h);
    ctx.fillStyle = this.props.color;
    ctx.fill();
  }

  render() {
    return null;
  }
}
