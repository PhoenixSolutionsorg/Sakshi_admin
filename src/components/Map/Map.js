import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";

export default function Map() {
    return <>
            
  <div className="templatemo-flex-row">
    <SideBar/>
    {/* Main content */}
    <div className="templatemo-content col-1 light-gray-bg">
      <div className="templatemo-top-nav-container">
        <div className="row">
          <nav className="templatemo-top-nav col-lg-12 col-md-12">
            <ul className="text-uppercase">
              <li>
                <a href="" className="active">
                  Admin panel
                </a>
              </li>
              <li>
                <a href="">Dashboard</a>
              </li>
              <li>
                <a href="">Overview</a>
              </li>
              <li>
                <a href="login.html">Sign in form</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="templatemo-content-container">
        <div className="templatemo-content-widget white-bg">
          <h2 className="margin-bottom-10">Geo Charts</h2>
          <p className="margin-bottom-0">
            Credit goes to{" "}
            <a href="http://jqvmap.com" target="_parent">
              JQVMap
            </a>
            .
          </p>
        </div>
        <div className="templatemo-flex-row flex-content-row">
          <div className="col-1">
            <div className="panel panel-default margin-10">
              <div className="panel-heading">
                <h2>World</h2>
              </div>
              <div className="panel-body">
                <div id="vmap_world" className="vmap" />
              </div>
            </div>
          </div>
          <div className="col-1">
            <div className="panel panel-default margin-10">
              <div className="panel-heading">
                <h2>Africa</h2>
              </div>
              <div className="panel-body">
                <div id="vmap_africa" className="vmap" />
              </div>
            </div>
          </div>
        </div>
        <div className="templatemo-flex-row flex-content-row">
          <div className="col-1">
            <div className="panel panel-default margin-10">
              <div className="panel-heading">
                <h2>Asia</h2>
              </div>
              <div className="panel-body">
                <div id="vmap_asia" className="vmap" />
              </div>
            </div>
          </div>
          <div className="col-1">
            <div className="panel panel-default margin-10">
              <div className="panel-heading">
                <h2>Australia</h2>
              </div>
              <div className="panel-body">
                <div id="vmap_australia" className="vmap" />
              </div>
            </div>
          </div>
        </div>
        <div className="templatemo-flex-row flex-content-row">
          <div className="col-1">
            <div className="panel panel-default margin-10">
              <div className="panel-heading">
                <h2>Europe</h2>
              </div>
              <div className="panel-body">
                <div id="vmap_europe" className="vmap" />
              </div>
            </div>
          </div>
          <div className="col-1">
            <div className="panel panel-default margin-10">
              <div className="panel-heading">
                <h2>United States of America</h2>
              </div>
              <div className="panel-body">
                <div id="vmap_usa" className="vmap" />
              </div>
            </div>
          </div>
        </div>
        <div className="templatemo-flex-row flex-content-row">
          <div className="col-1">
            <div className="panel panel-default margin-10">
              <div className="panel-heading">
                <h2>North America</h2>
              </div>
              <div className="panel-body">
                <div id="vmap_northamerica" className="vmap" />
              </div>
            </div>
          </div>
          <div className="col-1">
            <div className="panel panel-default margin-10">
              <div className="panel-heading">
                <h2>South America</h2>
              </div>
              <div className="panel-body">
                <div id="vmap_southamerica" className="vmap" />
              </div>
            </div>
          </div>
        </div>
      <Footer/>
      </div>
    </div>
  </div>
 
 

    </>



}