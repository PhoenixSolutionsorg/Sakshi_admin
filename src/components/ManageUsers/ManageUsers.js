import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";

export default function ManageUsers(){
    return <>
        <div className="templatemo-flex-row">
    <SideBar/>
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
      <div className="templatemo-content-widget no-padding">
        <div className="panel panel-default table-responsive">
          <table className="table table-striped table-bordered templatemo-user-table">
            <thead>
              <tr>
                <td>
                  <a href="" className="white-text templatemo-sort-by">
                    # <span className="caret" />
                  </a>
                </td>
                <td>
                  <a href="" className="white-text templatemo-sort-by">
                    First Name <span className="caret" />
                  </a>
                </td>
                <td>
                  <a href="" className="white-text templatemo-sort-by">
                    Last Name <span className="caret" />
                  </a>
                </td>
                <td>
                  <a href="" className="white-text templatemo-sort-by">
                    User Name <span className="caret" />
                  </a>
                </td>
                <td>
                  <a href="" className="white-text templatemo-sort-by">
                    Email <span className="caret" />
                  </a>
                </td>
                <td>Edit</td>
                <td>Action</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>John</td>
                <td>Smith</td>
                <td>@jS</td>
                <td>js@company.com</td>
                <td>
                  <a href="" className="templatemo-edit-btn">
                    Edit
                  </a>
                </td>
                <td>
                  <a href="" className="templatemo-link">
                    Action
                  </a>
                </td>
                <td>
                  <a href="" className="templatemo-link">
                    Delete
                  </a>
                </td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Bill</td>
                <td>Jones</td>
                <td>@bJ</td>
                <td>bj@company.com</td>
                <td>
                  <a href="" className="templatemo-edit-btn">
                    Edit
                  </a>
                </td>
                <td>
                  <a href="" className="templatemo-link">
                    Action
                  </a>
                </td>
                <td>
                  <a href="" className="templatemo-link">
                    Delete
                  </a>
                </td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Mary</td>
                <td>James</td>
                <td>@mJ</td>
                <td>mj@company.com</td>
                <td>
                  <a href="" className="templatemo-edit-btn">
                    Edit
                  </a>
                </td>
                <td>
                  <a href="" className="templatemo-link">
                    Action
                  </a>
                </td>
                <td>
                  <a href="" className="templatemo-link">
                    Delete
                  </a>
                </td>
              </tr>
              <tr>
                <td>4.</td>
                <td>Steve</td>
                <td>Bride</td>
                <td>@sB</td>
                <td>sb@company.com</td>
                <td>
                  <a href="" className="templatemo-edit-btn">
                    Edit
                  </a>
                </td>
                <td>
                  <a href="" className="templatemo-link">
                    Action
                  </a>
                </td>
                <td>
                  <a href="" className="templatemo-link">
                    Delete
                  </a>
                </td>
              </tr>
              <tr>
                <td>5.</td>
                <td>Paul</td>
                <td>Richard</td>
                <td>@pR</td>
                <td>pr@company.com</td>
                <td>
                  <a href="" className="templatemo-edit-btn">
                    Edit
                  </a>
                </td>
                <td>
                  <a href="" className="templatemo-link">
                    Action
                  </a>
                </td>
                <td>
                  <a href="" className="templatemo-link">
                    Delete
                  </a>
                </td>
              </tr>
              <tr>
                <td>6.</td>
                <td>Will</td>
                <td>Brad</td>
                <td>@wb</td>
                <td>wb@company.com</td>
                <td>
                  <a href="" className="templatemo-edit-btn">
                    Edit
                  </a>
                </td>
                <td>
                  <a href="" className="templatemo-link">
                    Action
                  </a>
                </td>
                <td>
                  <a href="" className="templatemo-link">
                    Delete
                  </a>
                </td>
              </tr>
              <tr>
                <td>7.</td>
                <td>Steven</td>
                <td>Eric</td>
                <td>@sE</td>
                <td>se@company.com</td>
                <td>
                  <a href="" className="templatemo-edit-btn">
                    Edit
                  </a>
                </td>
                <td>
                  <a href="" className="templatemo-link">
                    Action
                  </a>
                </td>
                <td>
                  <a href="" className="templatemo-link">
                    Delete
                  </a>
                </td>
              </tr>
              <tr>
                <td>8.</td>
                <td>Landi</td>
                <td>Susan</td>
                <td>@lS</td>
                <td>ls@company.com</td>
                <td>
                  <a href="" className="templatemo-edit-btn">
                    Edit
                  </a>
                </td>
                <td>
                  <a href="" className="templatemo-link">
                    Action
                  </a>
                </td>
                <td>
                  <a href="" className="templatemo-link">
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="templatemo-flex-row flex-content-row">
        <div className="col-1">
          <div className="panel panel-default margin-10">
            <div className="panel-heading">
              <h2 className="text-uppercase">Login Form</h2>
            </div>
            <div className="panel-body">
              <form action="index.html" className="templatemo-login-form">
                <div className="form-group">
                  <label htmlFor="inputEmail">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputEmail">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>
                <div className="form-group">
                  <div className="checkbox squaredTwo">
                    <label>
                      <input type="checkbox" /> Remember me
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" className="templatemo-blue-button">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-1">
          <div className="templatemo-content-widget pink-bg">
            <i className="fa fa-times" />
            <h2 className="text-uppercase margin-bottom-10">Latest Data</h2>
            <p className="margin-bottom-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mi
              sapien, fringilla at orci nec, viverra rhoncus leo. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus erat
              non purus commodo, sit amet varius dolor sagittis.
            </p>
          </div>
          <div className="templatemo-content-widget blue-bg">
            <i className="fa fa-times" />
            <h2 className="text-uppercase margin-bottom-10">Older Data</h2>
            <p className="margin-bottom-0">
              Phasellus dapibus nulla quis risus auctor, non placerat augue
              consectetur. Aliquam convallis pharetra odio, in convallis erat
              molestie sed. Fusce mi lacus, semper sit amet mattis eu, volutpat
              vitae enim.
            </p>
          </div>
        </div>
      </div>{" "}
      {/* Second row ends */}
      <div className="templatemo-flex-row flex-content-row">
        <div className="templatemo-content-widget white-bg col-2">
          <i className="fa fa-times" />
          <div className="media margin-bottom-30">
            <div className="media-left padding-right-25">
              <a href="#">
                <img
                  className="media-object img-circle templatemo-img-bordered"
                  src="images/person.jpg"
                  alt="Sunset"
                />
              </a>
            </div>
            <div className="media-body">
              <h2 className="media-heading text-uppercase blue-text">
                John Barnet
              </h2>
              <p>Project Manager</p>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <div className="circle green-bg" />
                  </td>
                  <td>New Task Issued</td>
                  <td>02</td>
                </tr>
                <tr>
                  <td>
                    <div className="circle pink-bg" />
                  </td>
                  <td>Task Pending</td>
                  <td>22</td>
                </tr>
                <tr>
                  <td>
                    <div className="circle blue-bg" />
                  </td>
                  <td>Inbox</td>
                  <td>13</td>
                </tr>
                <tr>
                  <td>
                    <div className="circle yellow-bg" />
                  </td>
                  <td>New Notification</td>
                  <td>18</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="templatemo-content-widget white-bg col-1 text-center templatemo-position-relative">
          <i className="fa fa-times" />
          <img
            src="images/person.jpg"
            alt="Bicycle"
            className="img-circle img-thumbnail margin-bottom-30"
          />
          <h2 className="text-uppercase blue-text margin-bottom-5">
            Paul Smith
          </h2>
          <h3 className="text-uppercase margin-bottom-70">Managing Director</h3>
          <div className="templatemo-social-icons-container">
            <div className="social-icon-wrap">
              <i className="fa fa-facebook templatemo-social-icon" />
            </div>
            <div className="social-icon-wrap">
              <i className="fa fa-twitter templatemo-social-icon" />
            </div>
            <div className="social-icon-wrap">
              <i className="fa fa-google-plus templatemo-social-icon" />
            </div>
          </div>
        </div>
        <div className="templatemo-content-widget white-bg col-1 templatemo-position-relative templatemo-content-img-bg">
          <img
            src="images/sunset-big.jpg"
            alt="Sunset"
            className="img-responsive content-bg-img"
          />
          <i className="fa fa-heart" />
          <h2 className="templatemo-position-relative white-text">Sunset</h2>
          <div className="view-img-btn-wrap">
            <a href="" className="btn btn-default templatemo-view-img-btn">
              View
            </a>
          </div>
        </div>
      </div>
      <div className="pagination-wrap">
        <ul className="pagination">
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li className="active">
            <a href="#">
              3 <span className="sr-only">(current)</span>
            </a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">5</a>
          </li>
          <li>
            <a href="#" aria-label="Next">
              <span aria-hidden="true">
                <i className="fa fa-play" />
              </span>
            </a>
          </li>
        </ul>
      </div>
   <Footer/>
    </div>
  </div>
</div>

    
    </>
}