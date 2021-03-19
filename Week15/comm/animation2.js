const TICK = Symbol("tick");
const TICK_HANDLER = Symbol("tick_handler");
const ANIMATION = Symbol("animation");
const START_TIME = Symbol("start-time");
// 动画
export class TimeLine {
  constructor() {
    this[ANIMATION] = new Set();
    this[START_TIME] = new Map();
  }

  start() {
    let startTime = Date.now();
    this[TICK] = () => {
      let now = Date.now();
      for (let animation of this[ANIMATION]) {
        let t;
        if (this[START_TIME].get(animation) < startTime) {
          t = now - startTime;
        } else {
          t = now - this[START_TIME].get(animation);
        }
        if (animation.duration < t) {
          this[ANIMATION].delete(animation);
          t = animation.duration;
        }
        animation.receive(t);
      }
      requestAnimationFrame(this[TICK]);
    };
    this[TICK]();
  }
  pause() {}
  resume() {}
  reset() {}
  add(animation, startTime) {
    if (arguments.length < 2) {
      startTime = Date.now();
    }
    this[ANIMATION].add(animation);
    this[START_TIME].set(animation, startTime);
  }
}

export class Animation {
  constructor(
    object,
    property,
    startValue,
    endValue,
    duration,
    delay,
    timingFunction
  ) {
    this.object = object;
    this.property = property;
    this.startValue = startValue;
    this.endValue = endValue;
    this.duration = duration;
    this.delay = delay;
    this.timingFunction = timingFunction;
  }
  //执行函数
  receive(time) {
    let range = this.endValue - this.startValue;
    this.object[this.property] =
      this.startValue + (range * time) / this.duration;
  }
}
