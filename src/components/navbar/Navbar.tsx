import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

//actions
import { openModal } from "../../redux/register/registerActions";
import {
  closeSidebar,
  openSidebar,
} from "../../redux/dashboard/dashboardActions";

import classes from "./navbar.module.css";

export default function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const windowWidth = useRef(window.innerWidth).current;
  const { authorized } = useSelector((state: any) => state.register);
  const { userData } = useSelector((state: any) => state.user);
  const { openSideNav } = useSelector((state: any) => state.dashboard);

  const handleCloseSideNav = () => {
    dispatch(closeSidebar());
  };

  const handleOpenSideNav = () => {
    dispatch(openSidebar());
  };

  const handleOpenRegisterModal = () => {
    dispatch(closeSidebar());
    dispatch(openModal());
  };

  return (
    <div className="w-[100%] flex flex-row justify-between items-center box-border py-[1rem]">
      <h2 className="font-extrabold text-[1.3rem]">LOGO</h2>
      {!authorized && windowWidth < 768 && (
        <div onClick={handleOpenSideNav} className="space-y-2 cursor-pointer">
          <span className="block w-5 h-0.5 bg-white"></span>
          <span className="block w-8 h-0.5 bg-white"></span>
          <span className="block w-8 h-0.5 bg-white"></span>
        </div>
      )}
      {!authorized && (
        <div
          className={`bg-backgroundColor md:bg-transparent ${
            !openSideNav && windowWidth < 786 ? "hidden" : ""
          } flex flex-col items-center h-[100vh] w-[100vw] fixed z-50 top-0 left-0 text-center py-16 md:py-0 md:h-full md:w-full md:relative md:flex-row md:justify-between`}
        >
          <div className="md:hidden block absolute top-8 right-8" onClick={handleCloseSideNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <nav className="flex flex-col md:flex-row gap-[2rem] item m-auto">
            <Link
              to="/about"
              spy={true}
              smooth={true}
              duration={500}
              delay={200}
              onClick={handleCloseSideNav}
              className={classes.navlinks}
            >
              About
            </Link>
            <Link
              to="/projects"
              spy={true}
              smooth={true}
              duration={500}
              delay={200}
              onClick={handleCloseSideNav}
              className={classes.navlinks}
            >
              Projects
            </Link>
            <Link
              to="timeline"
              spy={true}
              smooth={true}
              duration={500}
              delay={200}
              onClick={handleCloseSideNav}
              className={classes.navlinks}
            >
              Timeline
            </Link>
            <Link
              to="team"
              spy={true}
              smooth={true}
              duration={500}
              delay={200}
              onClick={handleCloseSideNav}
              className={classes.navlinks}
            >
              Team
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              delay={200}
              onClick={handleCloseSideNav}
              className={classes.navlinks}
            >
              Contact
            </Link>
          </nav>

          <button
            className="outline-none border-none bg-gradient-to-r from-[#9AFFFF] to-[#478EEE] relative px-16 py-2 rounded-[8px] shadow-custom"
            onClick={handleOpenRegisterModal}
          >
            Register
          </button>
        </div>
      )}
      {authorized && (
        <div
          className="w-[60px] h-[60px] rounded-[50%] text-black font-bold relative before:absolute before:top-[-5px] before:left-[-5px] before:box-border before:content-[''] before:w-[70px] before:h-[70px] before:rounded-[50%] before:z-[-1] before:bg-gradient-to-b from-[#9af5ff] to-[#a900cb]"
          onClick={() => navigate("/dashboard")}
        >
          <img
            src={userData.image}
            alt="user-profile-picture"
            className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover rounded-[50%]"
          />
        </div>
      )}
    </div>
  );
}
