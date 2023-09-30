import { useSelector } from "react-redux";

import Feed from "../../container/dashboard/Feed";
import LeaderBoard from "../../container/dashboard/Leaderboard";
import Sidebar from "../../container/dashboard/Sidebar";

const Dashboard = () => {
  const { selectedFeed } = useSelector((state: any) => state.dashboard);
  return (
    <div className="md:p-[2rem_4rem] p-2 w-full h-max absolute">
      {/* <NavBar /> */}
      <div className="flex md:flex-row flex-col h-full">
        <Sidebar />
        {selectedFeed === "MY PR" && <Feed />}
        {selectedFeed === "LEADERBOARD" && <LeaderBoard />}
      </div>
    </div>
  );
};

export default Dashboard;
