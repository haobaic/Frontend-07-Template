import { Component,createElement} from './framework'
  // div
  class Carousel  extends Component{
      constructor(){
          super();
          this.attributes=Object.create(null);
      }
      setAttribute(name, value){
        this.attributes[name]=value;
      }
      render(){
        this.root=document.createElement("div");
        for (const record of this.attributes.src) {
            let child=document.createElement("img");
            child.src=record;
            this.root.appendChild(child);
        }
        return this.root;
      }
      mountTo(parent){
        parent.appendChild(this.render());
      }
  }
  
  let d = [
    "https://t7.baidu.com/it/u=1732966997,2981886582&fm=193&f=GIF",
    "https://t7.baidu.com/it/u=1785207335,3397162108&fm=193&f=GIF",
    "https://t7.baidu.com/it/u=2581522032,2615939966&fm=193&f=GIF",
    "https://t7.baidu.com/it/u=245883932,1750720125&fm=193&f=GIF",
    "https://t7.baidu.com/it/u=3423293041,3900166648&fm=193&f=GIF"
  ]
  let a = <Carousel src={d} />;
 
  a.mountTo(document.body);