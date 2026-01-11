参考：https://mui.com/material-ui/getting-started/overview/
## 1、React脚手架新建一个项目：npx create-react-app my-app

## 2、安装M-UI插件：npm install @mui/material @emotion/react @emotion/styled

## 3、新建js文件，引入React 以及material插件
```js
import * as React from 'react';
import Button from '@mui/material/Button';

//后端：模块化开发
export default function MyApp() {
  return (
    <div>
      <Button variant="contained">Hello World</Button>
    </div>
  );
}
```

## 4、在ReactDOM中，将内容渲染出来
```js
import * as React from 'react';
import MyApp from './MyApp';

export default function App() {
  return (
    <div>
      <MyApp />
    </div>
  );
}

ReactDOM.createRoot(...).render(<App />)
```