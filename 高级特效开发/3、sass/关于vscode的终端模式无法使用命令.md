## 使用集成终端的问题
  本质:window权限问题 permissions 问题
 + 问题1:nodeJS: node直接安装  解压安装(没有管理员权限)
       解压安装会有 nodejs的文件夹 将文件夹的权限调整成管理员

 + 问题2:windows PowerShell 释放权限
      1) 右键用管理模式打开 vscode(HBuilder,Webstorm)  
      2) 管理员模式打开 Windows PowerShell (DOS) 
         set-executionpolicy remotesigned => 输入 Y 回车
      
  