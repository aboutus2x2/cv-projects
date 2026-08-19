function Navbar() {

  const [isSignIn,setIsSignIn] = React.useState(true)
  const [name,setName] = React.useState('张三')
  const [headIcon,setHeadIcon] = React.useState('./img/avatar-max-img.png')

  function openPublish(){
    window.open('./publish.html','_self')
  }

  function loginOut(){
    setIsSignIn(false)
  }

  function openSignIn(){
    window.open('./signIn.html','_self')
  }

  function openSignUp(){
    window.open('./signUp.html','_self')
  }

  return (
    <nav className="navbar bg-light border-bottom">
      <div className="container">
        <div className="d-flex">
          <a href="#">
            <img src="./img/logo.png" height="30" />
          </a>
          <input className="form-control ms-3" type="search" placeholder="Search" />
        </div>
        {isSignIn ? (<div className="d-flex">
          <div className="align-self-center">欢迎，{name}！</div>
          <div className="dropdown">
            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              <img src={headIcon} width="20" height="20" />
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">个人主页</a></li>
              <li><a className="dropdown-item" href="./settings.html">设置</a></li>
              <li><a className="dropdown-item" href="#" onClick={loginOut}>退出</a></li>
            </ul>
          </div>
          <button className="btn btn-outline-secondary" onClick={openPublish}>发起</button>
        </div>):
        (
          <div className="d-flex hstack gap-2">
            <button className="btn btn-success" onClick={openSignIn}>登录</button>
            <button className="btn btn-primary" onClick={openSignUp}>注册</button>
          </div>
        )}
      </div>

    </nav>
  )
}