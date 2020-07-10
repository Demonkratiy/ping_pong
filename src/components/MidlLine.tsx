import { PureComponent } from "react";
import { Context2D } from "../ctx";
import { VIEWPORT_WIDTH, VIEWPORT_HEIGHT } from "../constants";
import { Color } from "../settings";

export class MidlLine extends PureComponent {
  static contextType = Context2D;

  componentDidUpdate() {
    let ctx = this.context();
    let width = VIEWPORT_WIDTH - 20;
    let height = VIEWPORT_HEIGHT - 20;
    ctx.beginPath();
    ctx.strokeStyle = Color.GOLD;
    ctx.lineWidth = "10";

    ctx.moveTo(10, height / 2);
    ctx.lineTo(width + 10, height / 2);
    ctx.stroke();

    // ctx.beginPath();
    // ctx.rect(0, 0, VIEWPORT_WIDTH, VIEWPORT_HEIGHT / 2);
    // ctx.fillStyle = Color.WHITE;
    // ctx.fill();
    //
    // ctx.beginPath();
    // ctx.rect(0, 0, VIEWPORT_WIDTH, VIEWPORT_HEIGHT);
    // ctx.fillStyle = Color.BLACK;
    //ctx.fill();
  }

  render() {
    return null;
  }
}
