## 编译方式

### 1.将.scss文件 转化为.css文件
语法：sass 目录/文件.scss 目标目录/目标文件.css
    sass 文件.scss 文件.css
```shell
sass ./scss/a1.scss ../css/a1.css 
```

### 2.监视某个.scss 文件变化,一旦文件内容变化,重新自动生成.css文件
语法: sass --watch 目录/文件.scss 目标目录/目标文件.css
    sass --watch 文件.scss 文件.css
``` shell
sass --watch ./scss/a1.scss ../css/a1.css 
```
一旦命令执行,就会进入阻塞状态,通过Ctrl + C 停止

### 3.监视整个文件夹的变化
语法: sass --watch scss目录:目标css目录
```shell 
sass --watch ./scss:./css 
```

### Easy Sass 自动编译scss/sass文件
 缺点:不能指定对应的生成css的位置