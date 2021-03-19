import { Component, createElement } from "./framework";
import {Carousel} from './carousel';
import {TimeLine,Animation} from './animation';
let d = [
  "https://t7.baidu.com/it/u=1732966997,2981886582&fm=193&f=GIF",
  "https://t7.baidu.com/it/u=1785207335,3397162108&fm=193&f=GIF",
  "https://t7.baidu.com/it/u=2581522032,2615939966&fm=193&f=GIF",
  "https://t7.baidu.com/it/u=245883932,1750720125&fm=193&f=GIF",
  "https://t7.baidu.com/it/u=3423293041,3900166648&fm=193&f=GIF",
];
let a = <Carousel src={d} />;

a.mountTo(document.body);


let tl=new TimeLine();
window.tl=tl;
window.animation=new Animation({set a(v){console.log(v)}},"a",0,100,1000,null);
tl.start();