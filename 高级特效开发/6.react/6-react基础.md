## 01-react概述

[react是什么]()

`React`是一个用于构建用户界面的`JavaScript库`。
用户界面: HTML页面(前端)
React主要用来写HTML页面,或`构建Web应用`
如果从MVC的角度来看, React仅仅是视图层(V ) , 也就是只负责视图的渲染,而并非提供了
完整的M和C的功能。

[react的特点]()

+ 声明式

+ 基于组件

+ 学习一次，随处使用

**声明式**

只需要描述UI（HTML）是什么样，React负责渲染UI，并在数据变化时更新UI

```js
const jsx = <div className="app">
    <h1>React动态变化:{count}</h1>
</div>
```

**基于组件**

+ 组件时React`最重要`的内容

+ 组件表示页面中的部分内容

+ 组合、复用多个组件，可以实现完成的页面功能

**学习一次，随处使用**

+ 使用React可以开发Web应用

+ 使用React可以开发移动端原生应用( react-native )

+ 使用React可以开发VR(虚拟现实)应用(react360)

[react的基本使用]()

**React的安装**

安装命令：npm i react react-dom

+ react 包是核心，提供创建元素、组件等功能

+ react-dom 包提供DOM相关功能等

**React的使用**

1、引入react和react-dom 两个js文件

```html
<script src="./node_modules/react/umd/react.development.js"></script>
 <script src="./node_modules/react-dom/umd/react-dom.development.js"></script>
```

2、创建React元素

```js
<script>
    const title = React.createElement('h1',null,'Hello React')
</script>
```

3、渲染React元素

```js
ReactDOM.render(title,document.getElementById('root'))
```

方法说明：

React.createElement

参数1：元素名称

参数2：元素属性

参数3...：元素的子节点（文本、标记...）

ReactDOM.render

参数1：要渲染的React元素

参数2：DOM，渲染的挂载位置

【案例:实现多个元素嵌套显示】

## 02-react脚手架

**React脚手架意义**

1. 脚手架是开发现代Web应用的必备。
2. 充分利用Webpack、 Babel、 ESLint等I具辅助项目开发。
3. 零配置,无需手动配置繁琐的工具即可使用。
4. 关注业务,而不是工具配置。

**使用React脚手架初始化项目**

1、初始化项目，命令:npx create-react-app 项目名称（ my-app）

2、启动项目，在项目根目录执行命令:npm start (yarn start)

**npx命令介绍**

+ npm v5.2.0 引入的一 条命令

+ 目的:提升包内提供的命令行工具的使用体验

+ 以前：先安装脚手架包，再使用这个包中提供的命令

+ 现在：无需安装脚手架包，就可以直接使用这个包提供的命令

**补充:**

1.推荐使用: npx create-react-app my-app

2.npm init react-app my-app

3.yarn create react- app my-app

+ yarn 是Facebook发布的包管理器,可以看做是npm的替代品,功能与npm相同

+ yarn具有快速、可靠和安全的特点

+ 初始化新项目: yarn init

+ 安装包: yarn add包名称

+ 安装项目依赖项: yarn

+ 其他命令,请参考yarn文档

**在脚手架中使用React**

1.导入react和react-dom两个包。

```js
import React from 'react'
import ReactDOM from 'react-dom'
```

2.调用React.createElement(方法创建react元素。
3.调用ReactDOM.render(方法渲染react元素到页面中。

react基础阶段总结

1. React是构建用户界面的JavaScript库

2. 使用react时,`推荐使用脚手架方式`。

3. 初始化项目命令: `npx create-react-app my-app`。

4. 启动项目命令: `yarn start` (或`npm start` )。
   
   【案例】（关于模块化知识的使用）外部组件的定义

## 03-JSX的基本使用

 createElement的问题：

1.繁琐不简洁。
2.不直观,无法一眼看出所描述的结构。
3.不优雅,用户体验不爽。

**JSX简介**

JSX是JavaScript XML的简写,表示在JavaScript代码中写XML ( HTML )格式的代码。
优势:声明式语法更加直观、与HTML 结构相同,降低了学习成本、提升开发效率

JSX使用步骤

1、使用JSX语法创建react元素

```js
const title = <h1>Hello JSX</h1>
```

2、使用ReactDOM.render() 方法渲染react元素到页面

```js
ReactDOM.render(title,root)
```

**为什么脚手架中可以使用JSX语法**

1. JSX不是标准的ECMAScript语法,它是`ECMAScript的语法扩展`。

2. 需要使用`babel`编译处理后,才能在浏览器环境中使用。

3. create-react-app脚手架中已经默认有该配置,无需手动配置。

4. 编译JSX语法的包为: @babel/preset-react。

**JSX的注意点**

1. React元素的属性名使用`驼峰命名法`
2. 特殊属性名: class -> `className`、for -> htmlFor、tabindex -> tabIndex 
3. 没有子节点的React元素可以用` />` 结束
4. 推荐：使用`小括号包裹JSX`，从而避免JS中的自动插入分号陷阱

**在JSX中使用JavaScript表达式**

+ 数据储存在JS中

+ 语法:`{JavaScript表达式}`

**JSX的条件渲染**

+ 场景：loading效果

+ 条件渲染:根据条件渲染特定的JSX结构

+ 可以使用`if/else`或`三元运算符`或`逻辑与运算符`来实现

**JSX的列表渲染**

+ 如果要渲染一组数据，应该使用数组的`map()`方法

+ 注意:渲染列表时应该添加key属性，`key属性的值要保证唯一`

+ 原则: `map()`遍历谁,就给谁添加key属性

+ 注意：`尽量避免使用索引号作为key`

```js
const students = [
    {id:1,name:'张三'},
    {id:2,name:'李四'},
    {id:3,name:'王五'},
] 
const list = {
    <ul>
        {students.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
}
```

**JSX的样式处理**

1、行内样式-style

```js
<h1 style={{color:'red',backgroundColor:'blue'}}> JSX行内样式 </h1>
```

2、类名-className(推荐)

需要引入css

```js
import './css/index/css'
```

【案例：将指定json数据渲染至网页中】

```
fetch(url)
.then(response => { response.json(()=>{}).then(...).then(...) })
```

**JSX阶段总结**

1. JSX React的核心内容。
2. JSX 示在JS代码中写HTML结构,是React声明式的体现。
3. 使用JSX配合嵌入的JS表达式、条件渲染、列表渲染,可以描述任意UI结构。
4. 推荐使用className的方式给JSX添加样式。
5. React 完全利用JS语言自身的能力来编写UI ,而不是造轮子增强HTML功能。

## 04-React组件介绍

+ 组件是React的`一等公民`,使用React就是在用组件

+ 组件表示React实现的部分功能

+ 组合多个组件实现完整的页面功能

+ 特点:可复用、独立、可组合

##### 组件的两种创建方式（1函数组件）

+ 函数组件：使用JS的函数（或箭头函数）创建的组件

+ 注意：函数名称必须以`大写字母开头`

+ 注意: 函数组件必须有`返回值`，表示该组件的结构

+ 注意：返回值为null，就不显示任何内容

```js
function Hello(){
    return (
        <div>函数组件</div>
    )
}
```

+ 渲染函数组件：用函数名作为组件标签名

+ 组件标签可以是单标签，也可以是双标签

```js
ReactDOM.render(<Hello />,root)
```

##### 组件的两种创建方式（2类组件）

+ 类组件：使用ES6的class创建的组件

+ 注意：类名称必须以`大写字母开头`

+ 注意：类组件应该继承`React.Component` 父类，从而可以使用父类中提供的方法或者属性

+ 注意：类组件必须提供`render()`方法

+ 注意：render() 方法必须用`return返回值`，表示该组件的结构

```js
class Hello extends React.Component{
    render(){
        return <div>Hello Class Component!</div>
    }
}
ReactDOM.render(<Hello />,root)
```

##### 组件的两种创建方式（3抽离为独立js文件）

1、创建Hello.js

2、在Hello.js中导入React

3、创建组件（函数 或 类）

4、在Hello.js 中导出该组件

5、在index.js 中导入Hello 组件

6、渲染组件

```js
import React from 'react'
class Hello extends React.Component{
    render(){
        return <div>Hello Class Component!</div>
    }
}
export default Hello
```

##### React事件处理（1事件绑定）

+ React事件绑定语法与DOM事件语法很相似

+ 语法: `on+事件名称 = {事件处理程序}`,比如：onClick = {()=>{}}

+ 注意：`React事件采用驼峰法命名`, 比如：onMouseEnter,onFocus

+ 如果在函数组件中绑定事件，则调用事件函数不加this

```js
class App extends React.Component {
    handleClick(){
        console.log('被点击了')
    }
    render(){
        return (
            <button onClick={this.handleClick()}></button>
        )
    }
}
```

##### React事件处理（2事件对象）

+ 可以通过`事件处理程序参数`获取到事件对象

+ React中的事件对象叫做：`合成事件`（对象）

+ 合成事件：兼容所有浏览器，无需担心跨浏览器兼容性问题

```js
function handleClick(e){
    e.preventDefault()
    console.log('事件对象',e)
}
<a onClick={handleClick}>点击跳转</a>
```

有状态组件和无状态组件

+ 函数组件又叫做`无状态组件`，类组件又叫做`有状态组件`

+ 状态（state）即`数据`

+ 函数组件没有自己的状态，只负责`数据展示`（静态）

+ 类组件有自己的状态,`负责更新UI`（动态）

state的基本使用

+ 状态(state)即数据，是组件内部的私有数据，只能在组件内部使用

+ `state的值是对象`，表示一个组件中可以有多个数据

+ 通过this.state 来获取状态

```js
class Hello extends React.Component {
    constructor(){
        super()
        this.state = {
            count:0
        }
    }
    render(){
        return (
            <div>有状态组件</div>
        )
    }
}
```

ES6简化语法

```js
class Hello extends React.Component {

    state = {
        count:0
    }

    render(){
        return (
            <div>有状态组件</div>
        )
    }
}
```

【案例】有状态组件中的state可以定义哪些数据，如何调用

##### 组件中的state和setState()（1setState()修改状态）

+ 状态时可变的

+ 语法：this.setState({要修改的数据})

+ 注意：`不能直接修改state中的值`

+ setState()作用：1、`修改state` 2、`更新UI`

+ 数据驱动视图

```js
class Hello extends React.Component {

    state = {
        count:0
    }

    render(){
        return (
            <div>计数器:{this.state.count}</div>
            <button onClick={()={
                this.setState({
                    count:this.state.count + 1
                })
            }}>+1</button>
        )
    }
}
```

##### 组件中的state和setState()（2从JSX中抽离事件处理程序）

+ JSX中有太多的JS逻辑代码，会使程序混乱

+ 推荐：将逻辑抽离到单独的方法中，保证JSX结构清晰

```js
class Hello extends React.Component {

    state = {
        count:0
    }

    onIncrement(){
        this.setState({
              count:this.state.count + 1
        })
    }

    render(){
        return (
            <div>计数器:{this.state.count}</div>
            <button onClick={this.onIncrement()}>+1</button>
        )
    }
}
```

尝试将事件函数剥离JSX，我们会有：

`TypeError：Cannot read property 'setState' of undefined`

原因：事件处理程序中this的值为undefined

希望：this指向组件实例（render方法中的this即为组件实例）

#### 无状态组件的state

```js
const [count,setCount] = React.useState(0)
const [number,setNumber] = React.useState(1)
```

##### 事件绑定this指向（1箭头函数）

+ 利用箭头函数自身不绑定this的特点

```js
class Hello extends React.Component {

    state = {
        count:0
    }

    onIncrement(){
        this.setState({
              count:this.state.count + 1
        })
    }

    render(){
        return (
            <div>计数器:{this.state.count}</div>
            <button onClick={()=>this.onIncrement()}>+1</button>
        )
    }
}
```

##### 事件绑定this指向（2bind）

+ 利用ES5中的bind() 方法，将事件处理程序中的this与组件实例绑定到一起

```js
class Hello extends React.Component {

    state = {
        count:0
    }

    constructor(){
        super()
        this.onIncrement = this.onIncrement.bind(this)
    }

    onIncrement(){
        this.setState({
              count:this.state.count + 1
        })
    }

    render(){
        return (
            <div>计数器:{this.state.count}</div>
            <button onClick={()=this.onIncrement()>+1</button>
        )
    }
}
```

##### 事件绑定this指向（3class的实例方法）

+ 利用箭头函数形式的class实例方法

+ 注意：改语法是实验性的，但babel可以转化该语法

```js
class Hello extends React.Component {

    state = {
        count:0
    }

    onIncrement = ()=>{
        this.setState({
              count:this.state.count + 1
        })
    }

    render(){
        return (
            <div>计数器:{this.state.count}</div>
            <button onClick={this.onIncrement}>+1</button>
        )
    }
}
```

##### 事件绑定this指向-总结

1、推荐：`使用class的实例方法`

2、箭头函数

3、bind

##### 表单处理（1受控组件概念）

+ HTML中的表单元素是可输入的，也就是有自己的可变状态

+ 而React中可变状态通常保存在state中，并且只能通过setState() 方法来修改

+ React将state与表单元素值value绑定到一起，`由state的值来控制表单元素的值`

+ 受控组件：其值受到React控制的表单元素

##### 表单处理（2受控组件使用步骤）

受控组件设置步骤：

 1、在state中添加一个状态，作为表单元素的value值（控制表单元素值的来源）

 2、给表单元素绑定change事件，将表单元素的值，设置为state的值（受控表单元素值的变化）

```js
state = {txt:''}
<input type="text" value={this.state.txt} onchange={e => 
this.setState({txt : e.target.value})} />
```

##### 表单处理（3受控组件的示例）

富文本框textarea

```js
state = {content:''}
handleContent = e=>{
    this.setState({
        content:e.target.value
    })
}
```

```html
<textarea value={this.state.content} onChange={this.handleCOntent}>
</textarea>
```

下拉框select

```js
state = {city:'bj'}
handleCity = e=>{
    this.setState({
        city:e.target.value
    })
}
```

```html
<select value={this.state.city} onChange={this.handleCity}>
    <option value="sh">上海</option>
    <option value="bj">北京</option>
    <option value="gz">广州</option>
</select>
```

复选框

```js
state = {
    isChecked:false
}
handleCheck = e => {
    this.setState({
        isChecked:e.target.value
    })
}
```

```html
<input type="checkbox" checked={this.state.isChecked} 
onChange={this.handleCheck}/>
```

##### 表单处理（4多表单元素优化）

每个表单元素都有一个单独的事件处理程序处理太繁琐

使用一个事件处理程序同时处理多个表单元素

多表单元素优化步骤

1、给表单元素添加name属性，名称与state相同

```html
<input type="text" \
    name="txt"
    value={this.state.txt}
    onChange={this.handleForm}/>
```

2、根据表单元素类型获取对应值

```js
const value = target.type === 'checkbox' ? target.checked : target.value
this.setState({
    [name]:value
}) 
```

##### 表单处理（5非受控组件）

1、调用React.createRef() 方法创建一个ref对象

```js
constructor(){
    super()
    this.txtRef = React.createRef()
}
```

2、将创建好的ref对象添加到文本框中

```html
<input type="text" ref={this.txtRef} />
```

3、通过ref对象获取到文本框的值

```js
console.log(this.txtRef.current.value)
```

【案例：取消购物车选中】

【作业：多表单控制】

##### React组件基础总结

1、组件的两种创建方式:函数组件和类组件

2、无状态（函数）组件，负责静态结构展示

3、有状态 (类) 组件，负责更新UI，让页面动起来

4、绑定事件注意this指向问题

5、推荐使用受控组件来处理表单

6、完全利用JS语言的能力创建组件，这是React的思想

## 05-React组件基础综合案例（1案例需求分析）

【案例】评论列表

1）渲染评论列表（列表渲染）

2）没有评论数据时渲染：暂无评论（条件渲染）

3）获取评论信息，包括评论人和评论内容（受控组件）

4）发表评论，更新评论列表（setState() ）

【作业】表格控制（要求使用bootstrap 控制表单样式）

## React组件进阶学习目标

+ [使用props 接收数据]()

+ [实现父子组件之间的通讯]()

+ [实现兄弟组件之间的通讯]()

+ [组件添加props校验]()

+ [生命周期常用的钩子函数]()

+ [高阶组件作用]()

## 06-组件通讯介绍

`组件`是独立且封闭的单元,默认情况下,只能使用组件自己的数据。在组件化过程中，我们将个完整的功能拆分成多个组件，以更好的完成整个应用的功能。而在这个过程中，多个组件之间不可避免的要共享某些数据。为了实现这些功能，就需要打破组件的独立封闭性,让其与外界沟通。这个过程就是`组件通讯`。

##### 组件的props（1基本使用）

+ 组件是封闭的，要接收外部数据应该通过props来实现

+ props的作用：接收传递给组件的数据

+ 传递数据：给组件标签添加属性

+ 接收数据：函数组件通过参数props接收数据，类组件通过this.props接收数据

```html
<Hello name="jack" age={19} />
```

```js
function Hello(props){
    console.log(props)
    return (
        <div>接收到数据:{props.name}</div>
    )
}
```

```js
class Hello extends React.Component{
    render(){
        return (
            <div>接收到的数据:{this.props.name}</div>
        )
    }
}
```

##### 组件的props（2特点）

1、可以给组件传递任意类型的数据 （除了常见的数值、字符串、数组之外，还可以传递函数和标记等等）

2、props是只读的对象，只能读取属性的值，无法修改对象

（注意：使用类组件时，如果写了构造函数，应该将props传递给super(),否则，无法在构造函数中获取到props）

##### 组件通讯的三种方式（1父组件传递数据给子组件）

1、父组件提供要传递的state数据

2、给子组件标签添加属性，值为state中的数据

3、子组件中通过props接收父组件中传递的数据

```js
class Parent extends React.Component{
    state = { name:'zhangsan' }
    render(){
        return (
            <div>
                传递给子组件:<Child name={this.state.name} />
            </div>
        )
    }
}
```

```js
function Child(props){
    return <div>子组件接收到数据:{props.name}</div>
}
```

##### 组件通讯的三种方式（2子组件传递数据给父组件）

1、附件提供一个回调函数(用于接收数据)

2、将该函数作为属性的值，传递给子组件

3、子组件通过props调用回调函数

```js
class Parent extends React.Commponent{
    getChildMsg = msg =>{
        console.log('接收到子组件数据',msg)
    }
    render(){
        return (
            <div>
                子组件:<Child getMsg={this.getChildMsg} />
            </div>
        )
    }
}
```

```js
class Child extends React.Component {

    state = { childMsg: 'React'}

    handleClick(){ this.props.getMsg(this.childMsg) }

    return (<button onClick={this.handleClick}></button>)

}
```

##### 组件通讯的三种方式（3兄弟组件通讯）

+ 将共享状态提升到最近的公共组件中，由公共父组件管理这个状态

+ 思想：状态提升

+ 公共父组件职责：1、提供共享状态 2、提供操作共享状态的方法

+ 要通讯的子组件只需要通过props接收状态或操作状态的方法

【作业：组件封装】

【作业：秒表】

## 07-Context的基本使用

问题：如果需要Parent层层将数据传递给子组件中的子组件，该如何处理

+ 处理方式：使用props一层层往下传递（繁琐）

+ 更好的方式：使用Context，实现跨组件传递数据（比如：主题、语言等）

使用步骤：

1、调用React.createContext() 创建Provider （提供数据）和Consumer（消费数据）两个组件。

```js
const {Provider,Consumer} = React.createContext()
```

2、使用Provider组件作为父节点

```html
<Provider>
    <div className="App">
        <Child1 />
    </div>
</Provider>
```

3、 设置value属性，表示要传递的数据

```html
<Provider value="blue">
```

4、调用Consumer 组件接收数据

```html
<Consumer>
    {data => <span>data参数表示接收到的数据 -- {data}</span>}
</Consumer>
```

总结：

+ 如果两个组件是远方亲戚(比如，嵌套多层)

+ 可以使用Context实现组件通讯

+ Context提供 了两个组件: Provider和ConsumerProvider组件 :用来提供数据

+ Consumer组件 :用来消费数据

## 08-props深入

###### props深入（1children属性）

+ children 属性：表示组件标签的子节点。当组件标签由子节点时，props就会有该属性

+ children属性与普通的props一样，值可以时任意值（文本、React元素、组件、甚至是函数）

```js
function Hello(props){
    return (
        <div>
            组件的子节点:{props.children}
        </div>
    )
}
<Hello>子节点</Hello>
```

##### props深入（2props校验）

+ 对于组件来说，props是外来的，无法保证组件使用者传入什么格式的数据

+ 如果传入的数据格式不对，可能会导致组件内部报错

+ 关键问题：组件的使用者不知道明确的错误原因

```js
function App(props){
    const arr = props.colors
    const lis = arr.map((item,index) => <li key={index}>{item.name}</li>)
    return (
        <ul>{lis}</ul>
    )
}
<App colors={19}/>
```

+ props校验：允许在创建组件的时候，就指定props的类型、格式等

+ 作用：捕获使用组件时因为props导致的错误，给出明确的错误提示，添加组件的健壮性。

```js
App.propTypes = {
    colors:PropTypes.array
}
```

使用步骤：

1、安装包prop-types (yarn  add prop-types / npm i prop-types)

2、导入prop-types包

3、使用`组件名.propTyps = {}`给组件的props添加校验规则

4、[校验规则]()通过PropTypes 对象来指定

```js
import PropTypes from 'prop-types'
function App(props){
    return (
        <h1>Hi,{props.colors}</h1>
    )
}

App.propTypes = {
    colors:PropTypes.array
}
```

##### props深入（3props校验-约束规则）

约束规则

1、常见类型：array、bool、func、number、object、string

2、React元素类型:element

3、必填项:isRequired

4、特定结构的对象: shape({ })

```js
//常见类型
optionalFunc: PropTypes.func, 
// 必选
requiredFunc: PropTypes.func.isRequired,
//特定结构的对象
optionalObjectwithShape: PropTypes.shape({
    color: PropTypes.string, 
    fontSize: PropTypes.number
})
```

[使用 PropTypes 进行类型检查 – React (reactjs.org)](https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html)

练习：

添加props校验
属性a的类型:数值(number)
属性fn的类型:函数(func)并且为必填项
属性tag的类型:React元素(element ) 
属性filter的类型:对象({area:'上海'，price: 1999})

```js
App.propTypes = {
a: PropTypes.number，
fn: PropTypes.func.isRequired , 
tag: PropTypes.element ,
filter: PropTypes.shape({
area: PropTypes.string,
price: PropTypes.number
})
```

##### props深入（4props的默认值）

+ 场景：分页组件 -> 每页显示条数

+ 作用：给props设置默认值，在未传入props时生效

```js
App.defaultProps = {
    pageSize : 10
}
```

## 09-组件的生命周期

##### 组件的生命周期（1概述）

+ 意义：组件的生命周期有助于理解组件的运行方式、完成更复杂的组件功能，分析组件错误原因等

+ 组件的生命周期:组件从被创建到挂载到页面中运行,再到组件不用时卸载的过程

+ 生命周期的每个阶段总是伴随着一些方法调用,这些方法就是生命周期的钩子函数。

+ 钩子函数的作用:为开发人员在不同阶段操作组件提供了时机。

+ 只有类组件才有生命周期

##### 组件的生命周期三个阶段（1创建时）

+ 执行时刻：组件创建时（页面加载时）

+ 执行顺序：constructor -> render -> componentDidMouunt

| 钩子函数              | 触发时机          | 作用                         |
| ----------------- | ------------- | -------------------------- |
| constructor       | 创建组件时，最先执行    | 1、初始化state 2、为事件处理程序绑定this |
| render            | 每次组件渲染都会触发    | 渲染UI（注意：不能调用setState（））    |
| componentDidMount | 组件挂载（完成DOM渲染） | 1、发送网络请求 2、DOM操作           |

##### 组件的生命周期三个阶段（2更新时-1触发时机）

1、有新的props传入

2、setState方法被调用

3、forceUpdate执行

##### 组件的生命周期三个阶段（2更新时-2钩子函数说明）

更新时的执行顺序：render -> componentDidUpdate

| 钩子函数               | 触发时机          | 作用                                                 |
| ------------------ | ------------- | -------------------------------------------------- |
| render             | 每次组件渲染都会触发    | 渲染UI（注意：不能调用setState（））                            |
| componentDidUpdate | 组件更新（完成DOM渲染） | 1、发送网络请求 2、DOM操作 (setState必须放置在if条件中，默认参数preProps) |

##### 组件的生命周期三个阶段（3卸载时）

+ 执行时刻：组件从页面中消失

| 钩子函数                 | 触发时机         | 作用                |
| -------------------- | ------------ | ----------------- |
| componentWillUnmount | 组件卸载（从页面中消失） | 执行清理工作（比如：清理定时器等） |

##### 组件的生命周期三个阶段（4不常用钩子函数介绍）

1、shouldComponentUpdate(组件性能优化)

2、getSnapshotBeforeUpdate

生命周期图示：

<img title="" src="./md-img/6-1-1.jpg" alt="">

时间轴：

<img title="" src="./md-img/6-1-2.jpg" alt="">

## 10-错误边界

部分 UI 的 JavaScript 错误不应该导致整个应用崩溃，为了解决这个问题，React 16 引入了一个新的概念 —— 错误边界。

错误边界是一种 React 组件，这种组件`可以捕获发生在其子组件树任何位置的 JavaScript 错误，并打印这些错误，同时展示降级 UI`，而并不会渲染那些发生崩溃的子组件树。错误边界可以捕获发生在整个子组件树的渲染期间、生命周期方法以及构造函数中的错误。

其中重要方法是

```js
componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
    logErrorToMyService(error, errorInfo);
  }
```

## 11-Fragments

React 中的一个常见模式是一个组件返回多个元素。Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。

（主要解决子组件包裹元素的问题）

方式一：

```js
class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Hello</td>
        <td>World</td>
      </React.Fragment>
    );
  }
}
```

方式二：

```js
class Columns extends React.Component {
  render() {
    return (
      <>
        <td>Hello</td>
        <td>World</td>
      </>
    );
  }
}
```

## 12-Portals

Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。

```js
ReactDOM.createPortal(child, container)
```

第一个参数（`child`）是任何[可渲染的 React 子元素](https://zh-hans.reactjs.org/docs/react-component.html#render)，例如一个元素，字符串或 fragment。（第一个参数一般情况下是 this.props.children）

第二个参数（`container`）是一个 DOM 元素。

Protals的特征实际应用在 弹窗、确认框、警告等窗口设计中

## 13-Profiler

`Profiler` 测量一个 React 应用多久渲染一次以及渲染一次的“代价”。 

`Profiler` 能添加在 React 树中的任何地方来测量树中这部分渲染所带来的开销。 它需要两个 prop ：一个是 `id`(string)，一个是当组件树中的组件“提交”更新的时候被React调用的回调函数 `onRender`(function)。

分析Navigation组件和它的子代们：

```js
render(
  <App>
    <Profiler id="Navigation" onRender={callback}>
      <Navigation {...props} />
    </Profiler>
    <Main {...props} />
  </App>
);
```

多个Profiler组件能测量应用中的不同部分

```js
render(
  <App>
    <Profiler id="Navigation" onRender={callback}>
      <Navigation {...props} />
    </Profiler>
    <Profiler id="Main" onRender={callback}>
      <Main {...props} />
    </Profiler>
  </App>
);
```

嵌套使用Profiler组件来测量相同一个子树下的不同组件：

```js
render(
  <App>
    <Profiler id="Panel" onRender={callback}>
      <Panel {...props}>
        <Profiler id="Content" onRender={callback}>
          <Content {...props} />
        </Profiler>
        <Profiler id="PreviewPane" onRender={callback}>
          <PreviewPane {...props} />
        </Profiler>
      </Panel>
    </Profiler>
  </App>
);
```

 `onRender` 回调

```js
function onRenderCallback(
  id, // 发生提交的 Profiler 树的 “id”
  phase, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
  actualDuration, // 本次更新 committed 花费的渲染时间
  baseDuration, // 估计不使用 memoization 的情况下渲染整棵子树需要的时间
  startTime, // 本次更新中 React 开始渲染的时间
  commitTime, // 本次更新中 React committed 的时间
  interactions // 属于本次更新的 interactions 的集合
) {
  // 合计或记录渲染时间。。。

}
```

## 14-构建 React.js 的UI框架

+ `Material-UI `   一套实现 Google Material Design 的 React 组件
  
  地址：[Overview - Material UI (mui.com)](https://mui.com/material-ui/getting-started/overview/)

+ `React Desktop`  MacOS Sierra 和 Windows 10 的 React UI 组件。

+ `Semantic-UI` Semantic-UI 的官方 React 组件

+ `Ant-design`一套企业级的前端设计语言和基于 React 的前端框架实现。

+ `Blueprint `针对构建复杂、数据密集的 Web 界面的桌面应用进行了最优化。如果你重度依赖移动互动，并且正在寻找 mobile-first 的 UI 工具包，它可能不适合你。

+ `React-Bootstrap`React-Bootstrap 是一个可重复使用的前端组件库。你可以通过 Facebook 的 React.js 框架获得 Twitter  Bootstrap 的体验，而且有更为清晰的代码

+ `React-Toolbox`  一组使用 CSS 模块实现 Google Material Design 的 React 组件。

+ `Grommet` 用于企业应用最先进的 UX 框架。

+ Fabric 用于构建与 Office 和 Office 365 界面相类似的 Web 应用的 React 组件。

+ `React-md` 一个实现 Material Design 的库。React-md 可以轻松地根据自己的需要进行定制，拥有良好的文档和快速上手的“入门”指南，以及许多常见的 Material 组件。

##### Material-UI（MUI）使用

安装MUI

```
npm install @mui/material @emotion/react @emotion/styled
```

快速使用

```js
import * as React from 'react';
import Button from '@mui/material/Button';

export default function MyApp() {
  return (
    <div>
      <Button variant="contained">Hello World</Button>
    </div>
  );
}
```

##### React-Bootstrap

---

## React进阶

render props和高阶组件概述(1)

render props模式（1思路分析）

render props模式（2使用步骤）

render props模式（3演示Mouse组件的复用）

render props模式（4children代替render属性）

render props模式（5代码优化）

高阶组件（1介绍）

高阶组件（2使用步骤）

高阶组件（3设置displayName）

高阶组件（4传递props）

React组件进阶总结

React原理揭秘学习目标

setState()方法的说明（1更新数据）

setState()方法的说明（2推荐语法）

setState()方法的说明（3第二个参数）

JSX语法的转化过程

组件更新机制

组件性能优化（1减轻state）

组件性能优化（2避免不必要的重新渲染1）

组件性能优化（2避免不必要的重新渲染-随机数案例）

组件性能优化（2避免不必要的重新渲染-随机数案例2）

组件性能优化（3纯组件-基本使用）

组件性能优化（3纯组件-shallow compare）

虚拟DOM和Diff算法

虚拟DOM和Diff算法（代码演示）

React原理揭秘总结

React路由基础学习目标

React路由介绍

路由的基本使用

路由的基本使用（常用组件说明）

路由的执行过程

编程式导航

默认路由

匹配模式（1模糊匹配模式）

匹配模式（2精确匹配）

React路由基础总结
