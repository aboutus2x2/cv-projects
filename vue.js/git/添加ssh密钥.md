# 添加ssh密钥

本教程使用 windows 系统，以 github 为例，gitee 类似，不再赘述

<https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh>

## 什么是 ssh

<https://www.ssh.com/academy/ssh/protocol>

ssh: 一个安全的远程登陆和文件传输协议

## 创建 ssh 密钥

- 在 `用户（Users）` 文件夹下，进入自己当前账户的文件夹，没修改过账号名称则是 `Administrator` 文件夹
- 在自身用户文件夹下创建 `.ssh` 文件夹
- 运行命令创建 ssh 密钥
  - ```bash
    # 运行下列命令
    # your_email@example.com 部分替换成自己在 github 上注册的邮箱
    ssh-keygen -t ed25519 -C "your_email@example.com"
    ```
  - ```bash
    # 运行上述命令后 命令行会提示你输入一个保存密钥的位置 此时输入之前创建的 .ssh 文件夹目录
    Generating public/private ed25519 key pair.
    Enter file in which to save the key (C:\Users\Shampoo6\.ssh\id_ed25519):
    # 此时输入路径并给文件取名，例如
    c:/Users/Shampoo6/.ssh/id_ed25519
    ```
  - ```bash
    # 然后显示的内容会要求输入密码
    Enter passphrase (empty for no passphrase):
    # 此时键入密码 但密码是不会显示出来的
    # 然后回出现确认密码提示，再次输入密码回车即可
    Enter same passphrase again:
    # 最后会显示类似内容
    Your identification has been saved in d:/test.
    Your public key has been saved in d:/test.pub.
    The key fingerprint is:
    SHA256:/TaFw8SuL9AjdfDxiAmh55PftybLbN2pIOF3YD4VFP4 test@test.com
    The key's randomart image is:
    +--[ED25519 256]--+
    |        ..   o.  |
    |       .. ..+    |
    |      . .. =o*   |
    |       o o+++.+  |
    |        S+.+=..E |
    |        +o*+oo   |
    |         =o*=o...|
    |          +=*ooo.|
    |           o==o  |
    +----[SHA256]-----+
    ```
  - 至此密钥创建完成

## 为 github 添加 ssh 密钥

<https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account>

- 拷贝自己的公钥文件
  - ```bash
    # 使用命令行 赋值自己的公钥到剪切板上
    # 路径要填自己创建的 ssh key 的路径 并且选择 .pub 文件
    clip < "c:/users/shampoo6/.ssh/id_ed25519.pub"
    ```
- 找到设置，并打开自己账号的 `SSH and GPG keys`，点击 `New SSH key`
- 将剪切板的内容粘贴上去，并在 `title` 处取个名字保存即可

## 使用 ssh 密钥访问项目

- 开启 `ssh-agent` 代理
  ```bash
  eval "$(ssh-agent -s)"
  # 运行成功后回出现类似的提示
  Agent pid 59566
  ```
- 为 `ssh-agent` 添加密钥文件
  ```bash
  # 后面的路径是自己创的 ssh key 所在路径
  ssh-add c:/users/shampoo6/.ssh/id_ed25519
  ```

## 测试 ssh 链接

使用命令进行测试

```bash
ssh -T git@github.com
# 若一切正常则出现以下提示
The authenticity of host 'github.com (IP ADDRESS)' can not be established.
RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
Are you sure you want to continue connecting (yes/no)?
# 输入 yes 回车
# 然后看到类似下面这段话就算连接成功
Hi username! You've successfully authenticated, but GitHub does not
provide shell access.
```

## 后续操作

当设置好 `ssh key` 后，就可以通过 `ssh` 链接拉取项目了

后续项目的提交推送操作也和之前的 `git` 用法没有区别，只是不用在输入账号密码了

## 常见问题

### 测试 github 连接时无法通过

造成这个问题的原因是 `ssh` 默认端口是 `22` 而 `github` 则使用的是 `443` 所以我们需要修改访问的端口，方法如下：

在 `ssh key` 所在的文件夹 `.ssh` 下创建文件 `config` 内容如下：

```txt
Host github.com
  Hostname ssh.github.com
  Port 443
```

重新运行测试命令即可

### 修改已有项目的远程连接方式

<https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#switching-remote-urls-from-https-to-ssh>

若已经有项目的连接方式使用的 `http[s]`

例如，在 `git` 项目下 运行如下命令

```bash
git remote -v
# 该命令显示远程仓库的连接地址
origin  https://github.com/xxx/xxx.git (fetch)
origin  https://github.com/xxx/xxx.git (push)
```

若发现当前项目用的 `http[s]` 协议 则可以修改成 `ssh` 协议 运行以下命令

```bash
# origin 后面的路径是 ssh 连接的路径
git remote set-url origin git@github.com:USERNAME/REPOSITORY.git
```

### 每次重启后

`ssh-agent` 并不会随系统自动启动，所以每次开机后需要重新开启 `ssh-agent` 和 添加 `ssh key`

```bash
# 重新运行以下两句命令
eval "$(ssh-agent -s)"

ssh-add c:/users/shampoo6/.ssh/id_ed25519
```
