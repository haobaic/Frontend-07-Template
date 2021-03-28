import { createElement } from "./framework";
import { Carousel } from "./Carousel";
import { Button } from "./Button";
import { List } from "./List";
let d = [
  {
    img: "https://t7.baidu.com/it/u=1732966997,2981886582&fm=193&f=GIF",
    link: "https://www.baidu.com/",
    title: "第一个",
  },
  {
    img: "https://t7.baidu.com/it/u=1785207335,3397162108&fm=193&f=GIF",
    link: "https://www.vue3js.cn/docs/zh/",
    title: "第二个",
  },
  {
    img: "https://t7.baidu.com/it/u=2581522032,2615939966&fm=193&f=GIF",
    link: "https://vant-contrib.gitee.io/vant/v3/#/zh-CN",
    title: "第三个",
  },
];
// let a = (
//   <Carousel
//     src={d}
//     onChange={(event) => console.log(event.detail.position)}
//     onClick={(event) => window.location.href=event.detail.data.link}
//   />
// );
// let a = <Button>12345</Button>;

let a = (
  <List data={d}>
    {(record) => (
      <div>
        <img src={record.img} />
        <a href={record.link} target="_blank">
          {record.title}
        </a>
      </div>
    )}
  </List>
);
a.mountTo(document.body);
