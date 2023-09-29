import { useSelector } from "react-redux";

import NavBar from "../../components/navbar/Navbar";
import Feed from "../../container/dashboard/Feed";
import LeaderBoard from "../../container/dashboard/Leaderboard";
import Sidebar from "../../container/dashboard/Sidebar";

const Dashboard = () => {
  const { selectedFeed } = useSelector((state: any) => state.dashboard);
  return (
    <div className="p-[2rem_4rem] w-full h-full absolute">
      {/* <NavBar /> */}
      <div className="flex flex-row h-full">
        <Sidebar />
        {selectedFeed === "MY PR" && <Feed />}
        {selectedFeed === "LEADERBOARD" && <LeaderBoard />}
      </div>
    </div>
  );
};

export default Dashboard;
