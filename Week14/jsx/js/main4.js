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
        this.root.classList.add("carousel");
        for (const record of this.attributes.src) {
            let child=document.createElement("div");
            child.style.backgroundImage=`url(${record})`;
            this.root.appendChild(child);
        }
        this.root.addEventListener("mousedown",event=>{
            let move=event=>{
                console.log("mousemove");
            }
            let up=event=>{
                console.log("mouseup");
                document.removeEventListener("mousemove",move);
                document.removeEventListener("mouseup",up)
            }
            document.addEventListener("mousemove",move)
            document.addEventListener("mouseup",up)
        })
       
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