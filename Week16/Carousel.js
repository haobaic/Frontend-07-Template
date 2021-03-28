import { Component, STATE, ATTRIBUTE } from "./framework";
import { enableGesture } from "./gesture";
import { TimeLine, Animation } from "./animation";
import { ease } from "./ease";
export { STATE, ATTRIBUTE } from "./framework";
// div
export class Carousel extends Component {
  constructor() {
    super();
  }

  render() {
    this.root = document.createElement("div");
    this.root.classList.add("carousel");
    for (const record of this[ATTRIBUTE].src) {
      let child = document.createElement("div");
      child.style.backgroundImage = `url(${record.img})`;
      this.root.appendChild(child);
    }
    enableGesture(this.root);
    let timeLine = new TimeLine();
    timeLine.start();
    let handler = null;
    let children = this.root.children;
    this[STATE].position = 0;
    let t = 0;
    let ax = 0; //位移
    this.root.addEventListener("start", (event) => {
      timeLine.pause();
      clearInterval(handler);
      if (Date.now() - t < 1500) {
        let progress = (Date.now() - t) / 1500;
        ax = ease(progress) * 500 - 500;
      } else {
        ax = 0;
      }
    });
    this.root.addEventListener("tap", (event) => {
      this.triggerEvent("click", {
        data: this[ATTRIBUTE].src[this[STATE].position],
        position: this[STATE].position,
      });
    });
    this.root.addEventListener("pan", (event) => {
      let x = event.clientX - event.startX - ax;
      let current = this[STATE].position - (x - (x % 500)) / 500;
      for (const offect of [-1, 0, 1]) {
        let pos = current + offect;
        pos = ((pos % children.length) + children.length) % children.length;

        children[pos].style.transition = "none";
        children[pos].style.transform = `translateX(${
          -pos * 500 + offect * 500 + (x % 500)
        }px)`;
      }
    });
    this.root.addEventListener("end", (event) => {
      timeLine.reset();
      timeLine.start();
      handler = setInterval(nextPricture, 3000);

      let x = event.clientX - event.startX - ax;
      let current = this[STATE].position - (x - (x % 500)) / 500;
      let direction = Math.round((x % 500) / 500);

      if (event.isFlick) {
        if (event.velocity < 0) {
          direction = Math.ceil((x % 50) / 500);
        } else {
          direction = Math.floor((x % 50) / 500);
        }
      }

      for (const offect of [-1, 0, 1]) {
        let pos = current + offect;
        pos = ((pos % children.length) + children.length) % children.length;

        children[pos].style.transition = "none";
        timeLine.add(
          new Animation(
            children[pos].style,
            "transform",
            -pos * 500 + offect * 500 + (x % 500),
            -pos * 500 + offect * 500 + direction * 500,
            500,
            0,
            ease,
            (v) => `translateX(${v}px)`
          )
        );
      }
      this[STATE].position =
        this[STATE].position - (x - (x % 500)) / 500 - direction;
      this[STATE].position =
        ((this[STATE].position % children.length) + children.length) %
        children.length;

      this.triggerEvent("change", { position: this[STATE].position });
    });
    let nextPricture = () => {
      let children = this.root.children;
      let nextPosition = (this[STATE].position + 1) % children.length;

      let current = children[this[STATE].position];
      let next = children[nextPosition];
      t = Date.now();
      timeLine.add(
        new Animation(
          current.style,
          "transform",
          -this[STATE].position * 500,
          -500 - this[STATE].position * 500,
          500,
          0,
          ease,
          (v) => `translateX(${v}px)`
        ),
        timeLine.add(
          new Animation(
            next.style,
            "transform",
            500 - nextPosition * 500,
            -nextPosition * 500,
            500,
            0,
            ease,
            (v) => `translateX(${v}px)`
          )
        )
      );
      this[STATE].position = nextPosition;

      this.triggerEvent("change", { position: this[STATE].position });
    };
    handler = setInterval(nextPricture, 3000);
    return this.root;
  }
}
