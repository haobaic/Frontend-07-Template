# 浏览器的渲染流程
 * URL--HTTP-->HTML--parse-->DOM--css computing-->DOM with css--layout--> DOM with position--render-->Bitmap

# 排版/布局（layout）
 * 根据浏览器的属性进行排版
 * 三代排版技术
 ```
 正常流: position, display, float, ...
 Flex
 Grid
 ```
 
## 收集元素进行
 * 根据主轴尺寸，进行元素分行 若设置了'no-wrap' 就需要分到新的一行

## 主轴的计算
 * 计算主轴方向 *　找出所有Flex元素 *　把轴方向的剩余尺寸按比例分配 *　剩余尺寸<0，所有flex元素为0，等比例压缩剩余元素

## 交叉轴的计算
 * 根据每一行中最大元素尺寸计算行高
 * 根据行高flex-align 和 item-align，确定元素具体位置

##渲染
 * 绘制单个元素
 * 绘制DOM树