import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { setSelectedFeed } from "../../redux/dashboard/dashboardActions";
import { logoutUser, setLoading } from "../../redux/register/registerActions";

const Sidebar = () => {
  const { userData } = useSelector((state: any) => state.user);
  const { selectedFeed } = useSelector((state: any) => state.dashboard);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setLoading(true));
    dispatch(logoutUser());
    const timeoutId = setTimeout(() => {
      navigate("/");
    }, 1000);
    dispatch(setLoading(false));

    return () => clearTimeout(timeoutId);
  };

  return (
    <div className="md:w-[18rem] w-full h-full md:h-[100vh] flex flex-col items-center justify-between px-6 pt-16 pb-4 rounded-[10px_10px_0_0] md:rounded-[10px_0_0_10px] bg-opacity-5 backdrop-blur-md bg-[#7886c3] border-[1px] border-[#7886c342]">
      <h1 className="text-[1.7rem] font-extrabold select-none">DEBUG.0</h1>
      <div className="w-full flex flex-col gap-2">
        <div
          className={`h-[3rem] w-full box-border flex flex-row items-center justify-evenly text-white font-normal hover:font-bold p-3 hover:border-[1px] hover:border-[#7886c342] rounded-[8px] cursor-pointer hover:bg-[#ab78c317] uppercase ${
            selectedFeed === "MY PR" ? "bg-[#ab78c317]" : ""
          }`}
          onClick={() => {
            dispatch(setSelectedFeed("MY PR"));
          }}
        >
          MY PRs
        </div>
        <div
          className={`h-[3rem] w-full box-border flex flex-row items-center justify-evenly text-white font-normal hover:font-bold p-3 hover:border-[1px] hover:border-[#7886c342] rounded-[8px] cursor-pointer hover:bg-[#ab78c317] uppercase ${
            selectedFeed === "LEADERBOARD" ? "bg-[#ab78c317]" : ""
          }`}
          onClick={() => {
            dispatch(setSelectedFeed("LEADERBOARD"));
          }}
        >
          LEADERBOARD
        </div>
        <div
          className={`h-[3rem] w-full box-border flex flex-row items-center justify-evenly text-white font-normal hover:font-bold p-3 hover:border-[1px] hover:border-[#7886c342] rounded-[8px] cursor-pointer hover:bg-[#ab78c317] uppercase`}
          onClick={handleLogout}
        >
          LOGOUT
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </span>
        </div>
      </div>
      <div
        className="w-[12rem] h-[4.5rem] relative flex flex-row items-center justify-between border-[1px] border-[#7886c342] cursor-pointer rounded-[8px] py-2 px-2 hover:bg-[#ab78c317]"
        onClick={() => {
          window.open(
            `https://www.github.com/${userData.githubUsername}`,
            "_blank"
          );
        }}
      >
        <div
          className="w-[40px] h-[40px] rounded-[50%] text-black font-bold relative before:absolute before:top-[-2.5px] before:left-[-2.5px] before:box-border before:content-[''] before:w-[45px] before:h-[45px] before:rounded-[50%] before:z-[-1] before:bg-gradient-to-b from-[#9af5ff] to-[#a900cb]"
          onClick={() => {}}
        >
          <img
            src={userData.image}
            alt="user-profile-picture"
            className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover rounded-[50%]"
          />
        </div>
        <div className="flex flex-col items-end justify-center h-full w-max gap-2 ml-2">
          <h2 className="text-[0.8rem]">{userData.githubUsername}</h2>
          <h3 className="text-[0.6rem]">{userData.name || ":D"}</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
