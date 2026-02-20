## JSX语法的转化过程

1、JSX是createElement（）的简化语法

2、JSX语法被@babel/preset-react 插件编译为createElement（）方法

3、React元素：是一个对象，其结构用来描述在页面中的内容

## 组件更新机制

setState的两个作用：1、修改state 2、更新组件（UI）

过程：父组件重新渲染时，也会重新渲染子组件。但只会渲染当前组件以及所有子节点

## 组件性能优化

**减轻state**

+ 减轻state：只储存跟组件渲染相关的数据 （比如：count/列表数据/loading等）

+ 不做渲染的数据不要放在state中，例如定时器的id

+ 对于这种需要在多个方法中用到的数据，应该放在this中

**避免不必要的重新渲染**

+ 组件更新机制：父组件更新会引起子组件也被更新

+ 问题关键：子组件没有任何变化时也会重新渲染

+ 避免不必要重新渲染的解决方式 shouldComponentUpdate(nextProps,nextState)

+ 作用：通过返回值决定该组件是否重新渲染，返回true表示重新渲染，false表示不重新渲染。

+ 触发时机：更新阶段的钩子函数，组件重新渲染前执行（shouldComponentUpdate -> render）

案例：随机数（父组件->子组件）

## React-props和高阶组件

+ 如果两个组件有部分功能相似或相同，则我们复用其state 和操作state的方法

+ 有两种方式：1、render props模式 2、高阶组件（HOC）

引用类型中的比较

```js
const obj = {number:0}
const newobj = obj
newobj.number = 2
console.log(newobj === obj)
```

引发的错误问题，以下是错误做法：

```js
state = {obj:{number:0}}
state.obj.number = 2
setState({obj:state.obj})
//因为最新的state.obj === 上一次的state.obj //true 不重新渲染
```

正确的方式：

```js
const newobj = {...this.state.obj,number:'新的值'}
setState({obj:newobj})
```

例子：数组的更新方式

## 虚拟DOM 和 Diff算法

+ 如果整个组件只有一个DOM元素需要更新，不会把整个组件内容渲染到页面中

+ 虚拟DOM：本质上就是一个JS对象，用来描述显示的UI内容

虚拟DOM

```js
const element = {
    type:'div',
    props:{
        className:'box',
        children:'Hello World'
    }
}
```

HTML 结构

```html
<h1 class="box">
    Hello World
</h1>
```

执行过程

1、初次渲染，react根据state，创建一个虚拟DOM对象（树）

2、根据虚拟DOM生成真正的DOM，渲染到页面中。

3、当数据变化后（setState()），重新根据新的数据，创建新的虚拟DOM对象（树）

4、与上一次得到的虚拟DOM对象，使用Diff算法对比（找不同），得到需要更新的内容。

5、最后，将变化内容patch（更新）到DOM中，重新渲染到页面.

## React路由基础（Router-Route）

+ 现代前端应用大多都是SPA（单页应用程序），也就是只有一个HTML页面的应用程序。

+ 用户体验更好，对服务器的压力小

+ 前端路由的根本作用，就是页面相互跳转

+ React前端路由是URL路径与组件的对应关系（配置路径和组件）

使用步骤：

1、安装 npm add react-router-dom

2、导入路由的三个核心组件：Router / Route / Link

```js
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
```

3、使用Router组件包裹整个应用

```html
<Router>
    <div className="App">
        ...
    </div>
</Router>
```

4、使用Link组件作为导航菜单（路由入口）

```html
<Link to="/first">页面一</Link>
```

5、使用Router组件配置路由规则和要展示的组件（路由出口）

```html
const First = ()=> <p>页面一的页面内容</p>
<Router>
    <div className="App">
        <Link to="/first">页面一</Link>
        <Route path="/first" component={First}></Route>
    </div>
</Router>
```

常用组件说明

+ Router组件：包裹真个应用，一个React应用只需要用一次

+ Link组件，用于指定导航链接a标记 to就是location.pathname

+ Route组件，指定路由展示组件的内容

## 编程式导航

+ 通过JS代码来实现页面跳转

+ history 是React路由提供的，用于获取浏览器历史记录的相关信息

+ push(path) 跳转到某个页面，参数path表示要跳转的路径

+ go(n)  前进或后退到某个页面。参数n表示前进或后退页面数量（-1，上一页）

```
this.props.history,push('/home')
```

## 默认路由

```html
<Route path="/" component={Home}></Route>
```

## 精确匹配模式

了解模糊匹配模式

```html
<Route exact path="/" component={Home}></Route>
```
