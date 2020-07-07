import { PureComponent } from "react";
import { Context2D } from "../ctx";
import { VIEWPORT_WIDTH, VIEWPORT_HEIGHT } from "../constants";
import { Color } from "../settings";

export class Battleground extends PureComponent {
  static contextType = Context2D;

  componentDidUpdate() {
    let ctx = this.context();

    ctx.beginPath();
    ctx.fillStyle = Color.BLACK;
    ctx.strokeStyle = Color.GOLD;
    ctx.lineWidth = "10";

    ctx.rect(10, 10, VIEWPORT_WIDTH - 20, VIEWPORT_HEIGHT - 20);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.rect(10, 10, VIEWPORT_WIDTH - 20, VIEWPORT_HEIGHT / 2 - 20);
    ctx.fillStyle = Color.WHITE;
    ctx.fill();
  }

  render() {
    return null;
  }
}
