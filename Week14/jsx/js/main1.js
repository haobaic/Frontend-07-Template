function createElement(type, attributes, ...children) {
  let element;
  if(typeof type === 'string') {
    element= new ElementWrapper(type)
  }else{
    element= new type;
  }
  for (const name in attributes) {
    element.setAttribute(name, attributes[name]);
  }
  for (const child of children) {
      if(typeof child ==="string") {
          child =new TextWrapper(child);
      }
    element.appendChild(child);
  }
  return element;
}
class ElementWrapper {
    constructor(type){
        this.root=document.createElement(type);
    }
    setAttribute(name,value){
        this.root.setAttribute(name,value);
    }
    appendChild(child){
        child.mountTo(this.root);
    }
    mountTo(parent){
        parent.appendChild(this.root);
    }
}

class TextWrapper {
    constructor(content){
        this.root=document.createTextNode(content);
    }
    setAttribute(name,value){
        this.root.setAttribute(name,value);
    }
    appendChild(child){
        child.mountTo(this.root);
    }
    mountTo(parent){
        parent.appendChild(this.root);
    }
}
// div
class Div{
    constructor(){
        this.root=document.createElement("div");
    }
    setAttribute(name,value){
        this.root.setAttribute(name,value);
    }
    appendChild(child){
        child.mountTo(this.root);
    }
    mountTo(parent){
        
        parent.appendChild(this.root);
    }
}
let a = (
  <Div id="box">
    <span>内容</span>
    <span>内容</span>
    <span>内容</span>
  </Div>
);
// document.body.appendChild(a);
a.mountTo(document.body);