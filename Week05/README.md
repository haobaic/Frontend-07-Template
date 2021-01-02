>Proxy代理

## 理解:标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。
 * 使用(拦截):
 * get():拦截对象属性的读取
 * set():拦截对象属性的设置
 * deleteProperty() 拦截delete proxy[propKey]的操作，返回一个布尔值。

> 正常流里的拖拽
 * 监听指定元素块的mousedown、mouseup、mousemove事件，记录相应的位置，通过修改style.transform来实现元素块的移动
 * range - html中的区域，创建range，插入节点
 * 去除选中事件冒泡 - selectstart