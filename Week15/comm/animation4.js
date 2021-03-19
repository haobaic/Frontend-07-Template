const TICK = Symbol("tick");
const TICK_HANDLER = Symbol("tick_handler");
const ANIMATION = Symbol("animation");
const START_TIME = Symbol("start-time");
const PAUSE_START = Symbol("pause-start");
const PASE_TIME = Symbol("pase-time");
// 动画
export class TimeLine {
  constructor() {
    this[ANIMATION] = new Set();
    this[START_TIME] = new Map();
  }

  start() {
    let startTime = Date.now();
    this[PASE_TIME] = 0;
    this[TICK] = () => {
      let now = Date.now();
      for (let animation of this[ANIMATION]) {
        let t;
        if (this[START_TIME].get(animation) < startTime) {
          t = now - startTime - this[PASE_TIME] - animation.delay;
        } else {
          t =
            now -
            this[START_TIME].get(animation) -
            this[PASE_TIME] -
            animation.delay;
        }
        if (animation.duration < t) {
          this[ANIMATION].delete(animation);
          t = animation.duration;
        }
        if (t > 0) {
          animation.receive(t);
        }
      }
      this[TICK_HANDLER] = requestAnimationFrame(this[TICK]);
    };
    this[TICK]();
  }
  pause() {
    this[PAUSE_START] = Date.now();
    cancelAnimationFrame(this[TICK_HANDLER]);
  }
  //重启
  resume() {
    this[PASE_TIME] += Date.now() - this[PAUSE_START];
    this[TICK]();
  }
  reset() {
    this.pause();
    let startTime = Date.now();
    this[PASE_TIME] = 0;
    this[ANIMATION] = new Set();
    this[START_TIME] = new Map();
    this[PAUSE_START]=0;
    this[TICK_HANDLER]=null;
  }
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
    timingFunction,
    template
  ) {
    timingFunction = timingFunction || ((v) => v);
    template = template || ((v) => v);
    this.object = object;
    this.property = property;
    this.startValue = startValue;
    this.endValue = endValue;
    this.duration = duration;
    this.delay = delay;
    this.timingFunction = timingFunction;
    this.template = template;
  }
  //执行函数
  receive(time) {
    let range = this.endValue - this.startValue;
    //进展
    let progress = this.timingFunction(time / this.duration);
    this.object[this.property] = this.template(
      this.startValue + range * progress
    );
  }
}
