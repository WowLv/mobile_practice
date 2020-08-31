## mobile_practice
### 移动端知识点实践

+ 手淘静态页面练习(开发中)
	- [ ] 首页
	- [ ] 搜索页
	- [ ] 购物车
	- [ ] 个人中心

	> 在首页的模仿开发中我发现到了一点，在部分布局上频繁出现了`overflow: hidden`，一开始还以为是<del>炫技</del>代码风格，后来突然想起以前有BFC这么一个概念
	
	常规overflow的用法，不是设置内容是否截取，显示滚动条的吗
	
	![dbgrY8.png](https://s1.ax1x.com/2020/08/30/dbgrY8.png)
	
	然鹅 ↓
	![dH4Y8K.md.png](https://s1.ax1x.com/2020/08/29/dH4Y8K.md.png)
	
	于是就百度一波，勾起我当年的回忆
	> <font color=#B53C38>BFC是一个独立的布局环境，其中的元素布局是不受外界的影响，并且在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列。**简单来说，就是如果BFC这个属性，就视为一个被隔离的独立容器,且这个容器里的布局不会影响外部的布局**</font>
	
	![dH4xaR.md.png](https://s1.ax1x.com/2020/08/29/dH4xaR.md.png)
	
	那我们再来说说怎么触发BFC呢
	![dH5Yon.md.png](https://s1.ax1x.com/2020/08/29/dH5Yon.md.png)
	
	哦吼，好像有内味了！让我们回来康康手淘的布局，forexample:
	![dH54yD.png](https://s1.ax1x.com/2020/08/29/dH54yD.png)
	
	这里明明可以以简单的flex布局加上margin调整完成布局，试一试
	![dHIElT.png](https://s1.ax1x.com/2020/08/29/dHIElT.png)
	
	我们预想的效果是上下两个盒子加起来一共有40px的距离，但结果...
	![dHIJXD.png](https://s1.ax1x.com/2020/08/29/dHIJXD.png)
	
	似乎被合并了，但经了解这就是渲染规则
	#### BFC的布局规则
	+ 内部的Box会在垂直方向，一个接一个地放置
	+ **Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠**
	+ 计算BFC的高度时，浮动元素也参与计算（消除浮动）
	+ BFC的区域不会与float box重叠
	
	既然有了这些规则，我们来试试，把上下两个模块放在不同一个的父元素中，且给父元素加上`overflow: hidden`
	
	![dHoLM8.png](https://s1.ax1x.com/2020/08/30/dHoLM8.png)
	![dHoxaj.png](https://s1.ax1x.com/2020/08/30/dHoxaj.png)
	
	草率了hhhh，现在再回到项目中看布局，就不一样了，这确实是一种规范，确保每个盒子的布局都是自己想要的效果，不被一些隐式的规则坑的不明不白
