import { Link } from "react-router-dom";
import "../layout.css";
import { sidebar } from "../SidebarData";
import Seach from "../../public/Assets/magnifier.svg";
import Notification from "../../public/Assets/Notification.svg";
import Setting from "../../public/Assets/Setting.svg";
import Profile from "../../public/Assets/Profile.svg";
function Layout({ children }) {
  return (
    <>
      <div className="main">
        <div className="layout">
          <div className="sidebar">
            <div className="logo">
              <p> Company LOGO</p>
              {/* <hr /> */}
            </div>
            <div className="menu">
              {sidebar.map((e) => {
                return (
                  <Link
                    key={e.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                      padding: "1rem 1.5rem",
                      //  border:"1px solid red",
                      marginLeft: "20px",
                      boxSizing: "border-box",
                    }}
                    to={e.path}
                  >
                    <img className="sideIcon" src={e.image} alt="" />
                    <p className="sideText">{e.name}</p>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="content">
            <div className="header">
              <h2>Dashboard</h2>
              <div className="headerRightDiv">
                <div className="searchInput">
                  <img className="headerIcons" src={Seach} alt="Search" />
                  <input
                    type="text"
                    placeholder="Search here..."
                    style={{ border: "none", outline: "none" }}
                  />
                </div>

                <div className="notificat">
                  <p className="notificationCOunt">2</p>
                  <img
                    className="headerIcons"
                    src={Notification}
                    alt="Notification"
                  />
                </div>
                <img className="headerIcons" src={Setting} alt="Settings" />
                <img className="headerIcons" src={Profile} alt="Profile" />
              </div>
            </div>
            <div className="body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Layout;
