import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";

export default function Chart(){
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
        <h2 className="margin-bottom-10">Data Visualization</h2>
        <p>
          Credit goes to{" "}
          <a
            href="https://google-developers.appspot.com/chart/"
            target="_parent"
          >
            Google Charts
          </a>
        </p>
        <div className="panel panel-default no-border">
          <div className="panel-heading border-radius-10">
            <h2>Gauge</h2>
          </div>
          <div className="panel-body">
            <div className="templatemo-flex-row flex-content-row margin-bottom-30">
              <div className="col-1">
                <div id="gauge_div" className="templatemo-chart" />
                <h3 className="text-center margin-bottom-5">
                  Computer Resources
                </h3>
                <p className="text-center">Curabitur</p>
              </div>
            </div>
          </div>
        </div>
        <div className="panel panel-default no-border">
          <div className="panel-heading border-radius-10">
            <h2>Timeline</h2>
          </div>
          <div className="panel-body">
            <div className="templatemo-flex-row flex-content-row">
              <div className="col-1">
                <div id="timeline_div" className="templatemo-chart" />
                <h3 className="text-center margin-bottom-5">
                  Conference Schedule
                </h3>
                <p className="text-center">Lorem Ipsum</p>
              </div>
            </div>
          </div>
        </div>
        <div className="panel panel-default no-border">
          <div className="panel-heading border-radius-10">
            <h2>Area Chart</h2>
          </div>
          <div className="panel-body">
            <div className="templatemo-flex-row flex-content-row">
              <div className="col-1">
                <div id="area_chart_div" className="templatemo-chart" />
                <h3 className="text-center margin-bottom-5">
                  Company Performance
                </h3>
                <p className="text-center">Fusce mi lacus</p>
              </div>
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