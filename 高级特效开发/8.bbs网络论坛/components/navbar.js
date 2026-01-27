function Navbar() {

  const [isSignIn,setIsSignIn] = React.useState(false)

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
          <div className="align-self-center">欢迎，张三！</div>
          <div className="dropdown">
            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              <img src="./img/avatar-max-img.png" width="20" height="20" />
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">个人主页</a></li>
              <li><a className="dropdown-item" href="#">设置</a></li>
              <li><a className="dropdown-item" href="#">退出</a></li>
            </ul>
          </div>
          <button className="btn btn-outline-secondary">发起</button>
        </div>):
        (
          <div className="d-flex hstack gap-2">
            <button className="btn btn-success">登录</button>
            <button className="btn btn-primary">注册</button>
          </div>
        )}
      </div>

    </nav>
  )
}