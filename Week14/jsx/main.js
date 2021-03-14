import { Component, createElement } from "./framework";
// div
class Carousel extends Component {
  constructor() {
    super();
    this.attributes = Object.create(null);
  }
  setAttribute(name, value) {
    this.attributes[name] = value;
  }
  render() {
    this.root = document.createElement("div");
    this.root.classList.add("carousel");
    for (const record of this.attributes.src) {
      let child = document.createElement("div");
      child.style.backgroundImage = `url(${record})`;
      this.root.appendChild(child);
    }
    let position=0;
    this.root.addEventListener("mousedown", (event) => {
        let children=this.root.children;
      let startX = event.clientX;
      let move = (event) => {
        let x = event.clientX-startX;
        let current=position-Math.round((x-x%500)/500);
        for (const offect of [-1,0,1]) {
            let pos=current+offect;
            pos=(pos+children.length)%children.length;

            children[pos].style.transition="none";
            children[pos].style.transform=`translateX(${-pos*500+offect*500+x%500}px)`;
        }
      };
      let up = (event) => {
        let x = event.clientX-startX;
        position=position-Math.round(x/500);
        for (const offect of [0,-Math.sign(Math.round(x/500)-x+250*Math.sign(x))]) {
            let pos=position+offect;
            pos=(pos+children.length)%children.length;

            children[pos].style.transition="";
            children[pos].style.transform=`translateX(${-pos*500+offect*500}px)`;
        }
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", up);
      };
      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", up);
    });

    // let currentIndex=0;
    // setInterval(() =>{
    //     let children=this.root.children;
    //     let nextIndex=(currentIndex+1)%children.length;

    //     let current=children[currentIndex];
    //     let next=children[nextIndex];

    //     next.style.transition="none";
    //     next.style.transform=`translateX(${100-nextIndex*100}%)`;
    //     setTimeout(() =>{
    //         next.style.transition="";
    //         current.style.transform=`translateX(${-100-currentIndex*100}%)`;
    //         next.style.transform=`translateX(${-nextIndex*100}%)`;
    //         currentIndex=nextIndex;
    //     },16)
    // },3000)
    return this.root;
  }
  mountTo(parent) {
    parent.appendChild(this.render());
  }
}

let d = [
  "https://t7.baidu.com/it/u=1732966997,2981886582&fm=193&f=GIF",
  "https://t7.baidu.com/it/u=1785207335,3397162108&fm=193&f=GIF",
  "https://t7.baidu.com/it/u=2581522032,2615939966&fm=193&f=GIF",
  "https://t7.baidu.com/it/u=245883932,1750720125&fm=193&f=GIF",
  "https://t7.baidu.com/it/u=3423293041,3900166648&fm=193&f=GIF",
];
let a = <Carousel src={d} />;

a.mountTo(document.body);
