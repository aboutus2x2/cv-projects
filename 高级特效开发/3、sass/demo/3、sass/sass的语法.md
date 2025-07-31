## 变量

 + 格式: `$变量名称: 变量值`
 ```css
  $color:#f00;

  .content{
    color: $color;
  }
 
 ```

 ## Nesting 内嵌

 + 标记样式中继续定义子标记的样式
 ```css
.a{
  list-style: none;
  border: 1px solid black;
  li{
    color: red;
  }
}
.b{
  font-size: 20px;
  li{
    font-weight: bold;
  }
}
 ```

 ## extend 继承 
 ```css
 //定义父级
 %parent {
  font-size: 20px;
  color: cornflowerblue;
  font-family:'黑体';
}

//继承父级样式
.child{
  @extend %parent;
  font-weight: 300;
}
 ```

 ## use 引入其他的sass样式
@use 会将所有的样式引入
 ```css
@use 'a4';

.exmaple{
  color:a4.$color;
}
 ```

 ## mixin 定义样式的函数

 ```css
@mixin fn($primary-color:blue,$secondary-color:gray){
  background-color: $primary-color;
  color: $secondary-color;
  font-size: 30px;
}

// 直接使用mixin函数
.a{
  @include fn
}

// 对mixin函数的形参赋值
.b{
  @include fn($primary-color:red,$secondary-color:black)
}

// 赋值的另一种形式
.c{
  @include fn(red,black)
}
 ```
