import DashboardContant from "../Dashboard/DashboardContant";
import { Link } from 'react-router-dom'

export default function SideBar(){
    return<>
        <>

  <div className="templatemo-flex-row">
    <div className="templatemo-sidebar">
      <header className="templatemo-site-header">
        <div className="square" />
        <h1>Visual Admin</h1>
      </header>
      <div className="profile-photo-container">
        <img
          src="images/profile-photo.jpg"
          alt="Profile Photo"
          className="img-responsive"
        />
        <div className="profile-photo-overlay" />
      </div>
      {/* Search box */}
      <form className="templatemo-search-form" role="search">
        <div className="input-group">
          <button type="submit" className="fa fa-search" />
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            name="srch-term"
            id="srch-term"
          />
        </div>
      </form>
      <div className="mobile-menu-icon">
        <i className="fa fa-bars" />
      </div>
      <nav className="templatemo-left-nav">
        <ul>
          <li>
            <a href="#" className="active">
              <i className="fa fa-home fa-fw" />
              Dashboard
            </a>
          </li>
          <li>
             <Link to={"/charts"}> 
              <i className="fa fa-bar-chart fa-fw" />
              Charts
            </Link>
          </li>
          <li>
              <Link to={"/charts"}>
              <i className="fa fa-database fa-fw" />
              Data Visualization
              </Link>
          </li>
          <li>
            <Link to={"/map"}>
              <i className="fa fa-map-marker fa-fw" />
              Maps
            </Link>
          </li>
          <li>
              <Link to={"/manage_user"}>
              <i className="fa fa-users fa-fw" />
              Manage Users
              </Link>
          </li>
          <li>
            <Link to={"/preferences"}>
              <i className="fa fa-sliders fa-fw" />
              Preferences
            </Link>
          </li>
          <li>
            <Link to={"/login"}>
              <i className="fa fa-eject fa-fw" />
              Sign Out
          </Link>
          </li>
        </ul>
      </nav>
    </div>
  
  
  </div>
</>

    </>
}