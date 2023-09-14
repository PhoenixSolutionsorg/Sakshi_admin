export default function Login() {
    return <>
    
    <div className="templatemo-content-widget templatemo-login-widget white-bg">
      <header className="text-center">
        <div className="square" />
        <h1>Visual Admin</h1>
      </header>
      <form action="index.html" className="templatemo-login-form">
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-addon">
              <i className="fa fa-user fa-fw" />
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="js@dashboard.com"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-addon">
              <i className="fa fa-key fa-fw" />
            </div>
            <input
              type="password"
              className="form-control"
              placeholder="******"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="checkbox squaredTwo">
            <input type="checkbox" id="c1" name="cc" />
            <label htmlFor="c1">
              <span />
              Remember me
            </label>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="templatemo-blue-button width-100">
            Login
          </button>
        </div>
      </form>
    </div>
    <div className="templatemo-content-widget templatemo-login-widget templatemo-register-widget white-bg">
      <p>
        Not a registered user yet?{" "}
        <strong>
          <a href="#" className="blue-text">
            Sign up now!
          </a>
        </strong>
      </p>
    </div>
  </>
  
}