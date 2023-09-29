import { useSelector, useDispatch } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

//actions
import { openModal } from "../../redux/register/registerActions";

import classes from "./navbar.module.css";

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authorized } = useSelector((state: any) => state.register);
  const { userData } = useSelector((state: any) => state.user);

  return (
    <div className="w-[100%] flex flex-row justify-between items-center box-border py-[1rem]">
      <h2 className="font-extrabold text-[1.3rem]">LOGO</h2>
      {!authorized && (
        <>
          <nav className="flex flex-row gap-[2rem] item m-auto">
            <Link
              to="/about"
              spy={true}
              smooth={true}
              duration={500}
              className={classes.navlinks}
            >
              About
            </Link>
            <Link
              to="/projects"
              spy={true}
              smooth={true}
              duration={500}
              className={classes.navlinks}
            >
              Projects
            </Link>
            <Link
              to="timeline"
              spy={true}
              smooth={true}
              duration={500}
              className={classes.navlinks}
            >
              Timeline
            </Link>
            <Link
              to="team"
              spy={true}
              smooth={true}
              duration={500}
              className={classes.navlinks}
            >
              Team
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className={classes.navlinks}
            >
              Contact
            </Link>
          </nav>

          <button
            className="outline-none border-none bg-gradient-to-r from-[#9AFFFF] to-[#478EEE] px-16 py-2 rounded-[8px] shadow-custom"
            onClick={() => dispatch(openModal())}
          >
            Register
          </button>
        </>
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
