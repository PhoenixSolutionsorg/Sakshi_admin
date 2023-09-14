import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";

export default function Preferences(){
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
        <h2 className="margin-bottom-10">Preferences</h2>
        <p>Here goes another form and form controls.</p>
        <form
          action="index.html"
          className="templatemo-login-form"
          method="post"
          encType="multipart/form-data"
        >
          <div className="row form-group">
            <div className="col-lg-6 col-md-6 form-group">
              <label htmlFor="inputFirstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="inputFirstName"
                placeholder="John"
              />
            </div>
            <div className="col-lg-6 col-md-6 form-group">
              <label htmlFor="inputLastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="inputLastName"
                placeholder="Smith"
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-lg-6 col-md-6 form-group">
              <label htmlFor="inputUsername">Username</label>
              <input
                type="text"
                className="form-control"
                id="inputUsername"
                placeholder="Admin"
              />
            </div>
            <div className="col-lg-6 col-md-6 form-group">
              <label htmlFor="inputEmail">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="admin@company.com"
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-lg-6 col-md-6 form-group">
              <label htmlFor="inputCurrentPassword">Current Password</label>
              <input
                type="password"
                className="form-control highlight"
                id="inputCurrentPassword"
                placeholder="*********************"
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-lg-6 col-md-6 form-group">
              <label htmlFor="inputNewPassword">New Password</label>
              <input
                type="password"
                className="form-control"
                id="inputNewPassword"
              />
            </div>
            <div className="col-lg-6 col-md-6 form-group">
              <label htmlFor="inputConfirmNewPassword">
                Confirm New Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputConfirmNewPassword"
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-lg-12 has-success form-group">
              <label className="control-label" htmlFor="inputWithSuccess">
                Input with success
              </label>
              <input
                type="text"
                className="form-control"
                id="inputWithSuccess"
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-lg-12 has-warning form-group">
              <label className="control-label" htmlFor="inputWithWarning">
                Input with warning
              </label>
              <input
                type="text"
                className="form-control"
                id="inputWithWarning"
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-lg-12 has-error form-group">
              <label className="control-label" htmlFor="inputWithError">
                Input with error
              </label>
              <input type="text" className="form-control" id="inputWithError" />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-lg-12 form-group">
              <label className="control-label" htmlFor="inputNote">
                Note
              </label>
              <textarea
                className="form-control"
                id="inputNote"
                rows={3}
                defaultValue={""}
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-lg-6 col-md-6 form-group">
              <label className="control-label templatemo-block">
                Single Selection Control
              </label>
              <select className="form-control">
                <option value="html">HTML</option>
                <option value="plain">Plain Text</option>
              </select>
            </div>
            <div className="col-lg-6 col-md-6 form-group">
              <div className="templatemo-block margin-bottom-5">
                <input
                  type="checkbox"
                  name="emailOptions"
                  id="c1"
                  defaultValue="new"
                  defaultChecked=""
                />
                <label htmlFor="c1" className="font-weight-400">
                  <span />
                  Email me when new member sign up.
                </label>
              </div>
              <div className="templatemo-block margin-bottom-5">
                <input
                  type="checkbox"
                  name="emailOptions"
                  id="c2"
                  defaultValue="weekly"
                />
                <label htmlFor="c2" className="font-weight-400">
                  <span />
                  Weekly summary email
                </label>
              </div>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-lg-6 col-md-6 form-group">
              <label className="control-label templatemo-block">
                Multiple Selection Control
              </label>
              <select
                multiple=""
                className="templatemo-multi-select form-control"
                style={{ overflowY: "scroll" }}
              >
                <option value="">Charts</option>
                <option value="">Graphs</option>
                <option value="">Icons</option>
                <option value="">Repsonsive</option>
                <option value="">HTML5</option>
                <option value="">CSS3</option>
                <option value="">jQuery</option>
              </select>
            </div>
            <div className="col-lg-6 col-md-6 form-group">
              <div>
                <label className="control-label templatemo-block">
                  Email Option
                </label>
                <div className="templatemo-block margin-bottom-5">
                  <input
                    type="radio"
                    name="emailOptions"
                    id="r1"
                    defaultValue="html"
                    defaultChecked=""
                  />
                  <label htmlFor="r1" className="font-weight-400">
                    <span />
                    HTML Format
                  </label>
                </div>
                <div className="templatemo-block margin-bottom-5">
                  <input
                    type="radio"
                    name="emailOptions"
                    id="r2"
                    defaultValue="plain"
                  />
                  <label htmlFor="r2" className="font-weight-400">
                    <span />
                    Plain Text
                  </label>
                </div>
                <div className="templatemo-block margin-bottom-5">
                  <input
                    type="radio"
                    name="emailOptions"
                    id="r3"
                    defaultValue="rich"
                  />
                  <label htmlFor="r3" className="font-weight-400">
                    <span />
                    Rich Text
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-lg-12 form-group">
              <div className="margin-right-15 templatemo-inline-block">
                <input
                  type="checkbox"
                  name="server"
                  id="c3"
                  defaultValue=""
                  defaultChecked=""
                />
                <label htmlFor="c3" className="font-weight-400">
                  <span />
                  Server Status
                </label>
              </div>
              <div className="margin-right-15 templatemo-inline-block">
                <input type="checkbox" name="member" id="c4" defaultValue="" />
                <label htmlFor="c4" className="font-weight-400">
                  <span />
                  Member Status
                </label>
              </div>
              <div className="margin-right-15 templatemo-inline-block">
                <input type="checkbox" name="expired" id="c5" defaultValue="" />
                <label htmlFor="c5" className="font-weight-400">
                  <span />
                  Expired Members
                </label>
              </div>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-lg-12 form-group">
              <div className="margin-right-15 templatemo-inline-block">
                <input type="radio" name="radio" id="r4" defaultValue="" />
                <label htmlFor="r4" className="font-weight-400">
                  <span />
                  Bootstrap
                </label>
              </div>
              <div className="margin-right-15 templatemo-inline-block">
                <input
                  type="radio"
                  name="radio"
                  id="r5"
                  defaultValue=""
                  defaultChecked=""
                />
                <label htmlFor="r5" className="font-weight-400">
                  <span />
                  Foundation
                </label>
              </div>
              <div className="margin-right-15 templatemo-inline-block">
                <input type="radio" name="radio" id="r6" defaultValue="" />
                <label htmlFor="r6" className="font-weight-400">
                  <span />
                  Skeleton
                </label>
              </div>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-lg-12">
              <label className="control-label templatemo-block">
                File Input
              </label>
              {/* <input type="file" name="fileToUpload" id="fileToUpload" class="margin-bottom-10"> */}
              <input
                type="file"
                name="fileToUpload"
                id="fileToUpload"
                className="filestyle"
                data-buttonname="btn-primary"
                data-buttonbefore="true"
                data-icon="false"
              />
              <p>Maximum upload size is 5 MB.</p>
            </div>
          </div>
          <div className="form-group text-right">
            <button type="submit" className="templatemo-blue-button">
              Update
            </button>
            <button type="reset" className="templatemo-white-button">
              Reset
            </button>
          </div>
        </form>
      </div>
  <Footer/>
    </div>
  </div>
</div>

    </>
}