import { useSelector } from "react-redux";

//helpers
import formatDate from "../../utils/helpers/formatData";
import truncateText from "../../utils/helpers/trancateText";

// const DUMMY_PR = [
//   {
//     issueUrl: "https://github.com/user1/repo1/issues/1",
//     repoUrl: "https://github.com/user1/repo1",
//     title: "Pull Request #1000000000000000000000000000000",
//     created_At: new Date("2023-09-29T08:00:00Z"),
//     closed_At: new Date("2023-09-30T10:30:00Z"),
//   },
//   {
//     issueUrl: "https://github.com/user2/repo2/issues/2",
//     repoUrl: "https://github.com/user2/repo2",
//     title: "Pull Request #2",
//     created_At: new Date("2023-09-28T14:45:00Z"),
//     closed_At: new Date("2023-09-29T16:20:00Z"),
//   },
//   {
//     issueUrl: "https://github.com/user3/repo3/issues/3",
//     repoUrl: "https://github.com/user3/repo3",
//     title: "Pull Request #3",
//     created_At: new Date("2023-09-27T09:15:00Z"),
//     closed_At: new Date("2023-09-28T11:10:00Z"),
//   },
//   {
//     issueUrl: "https://github.com/user4/repo4/issues/4",
//     repoUrl: "https://github.com/user4/repo4",
//     title: "Pull Request #4",
//     created_At: new Date("2023-09-26T16:30:00Z"),
//     closed_At: new Date("2023-09-27T18:45:00Z"),
//   },
//   {
//     issueUrl: "https://github.com/user5/repo5/issues/5",
//     repoUrl: "https://github.com/user5/repo5",
//     title: "Pull Request #5",
//     created_At: new Date("2023-09-25T11:00:00Z"),
//     closed_At: new Date("2023-09-26T13:25:00Z"),
//   },
//   {
//     issueUrl: "https://github.com/user5/repo5/issues/5",
//     repoUrl: "https://github.com/user5/repo5",
//     title: "Pull Request #5",
//     created_At: new Date("2023-09-25T11:00:00Z"),
//     closed_At: new Date("2023-09-26T13:25:00Z"),
//   },
//   {
//     issueUrl: "https://github.com/user5/repo5/issues/5",
//     repoUrl: "https://github.com/user5/repo5",
//     title: "Pull Request #5",
//     created_At: new Date("2023-09-25T11:00:00Z"),
//     closed_At: new Date("2023-09-26T13:25:00Z"),
//   },
//   {
//     issueUrl: "https://github.com/user5/repo5/issues/5",
//     repoUrl: "https://github.com/user5/repo5",
//     title: "Pull Request #5",
//     created_At: new Date("2023-09-25T11:00:00Z"),
//     closed_At: new Date("2023-09-26T13:25:00Z"),
//   },
//   {
//     issueUrl: "https://github.com/user5/repo5/issues/5",
//     repoUrl: "https://github.com/user5/repo5",
//     title: "Pull Request #5",
//     created_At: new Date("2023-09-25T11:00:00Z"),
//     closed_At: new Date("2023-09-26T13:25:00Z"),
//   },
//   {
//     issueUrl: "https://github.com/user5/repo5/issues/5",
//     repoUrl: "https://github.com/user5/repo5",
//     title: "Pull Request #5",
//     created_At: new Date("2023-09-25T11:00:00Z"),
//     closed_At: new Date("2023-09-26T13:25:00Z"),
//   },
// ];

// Now you can use this dummyData in your array.

const LeaderBoard = () => {
  const { userData } = useSelector((state: any) => state.user);
  return (
    <div className="w-full h-full flex flex-col items-center px-8 py-8 rounded-[0px_10px_10px_0px] bg-opacity-5 backdrop-blur-md bg-[#7886c3] border-[1px] border-[#7886c342]">
      <h1 className="w-full font-bold text-[1.3rem] mb-4 uppercase">
        LEADERBOARD
      </h1>
      <div className="w-full h-full rounded-lg bg-[#a378c318] flex flex-col overflow-y-scroll overflow-x-hidden">
        {/* {userData &&
          userData?.pr &&
          userData?.pr.length > 0 &&
          userData.pr.map((pr: any, index: number) => (
            <div
              className="flex flex-row px-8 py-3 w-full items-center cursor-pointer hover:bg-[#5151a46b]"
              onClick={() => {
                window.open(pr.issueUrl, "_blank");
              }}
            >
              <div
                className="w-[40px] h-[40px] rounded-[50%] text-black font-bold relative before:absolute before:top-[-2.5px] before:left-[-2.5px] before:box-border before:content-[''] before:w-[45px] before:h-[45px] before:rounded-[50%] before:z-[-1] before:bg-gradient-to-b from-[#9af5ff] to-[#a900cb] mr-8"
                onClick={() => {
                  window.open(pr.repoUrl, "_blank");
                }}
              >
                <img
                  src=""
                  alt="repo"
                  className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover rounded-[50%]"
                />
              </div>
              <h4 className="w-[50%]">{truncateText(pr.title, 25)}</h4>
              <div className="text-center">
                <p>Created At</p>
                <p className="text-[0.7rem]">{formatDate(pr.created_At)}</p>
              </div>
              <div className="text-center ml-auto">
                <p>Closed At</p>
                <p className="text-[0.7rem]">{formatDate(pr.closed_At)}</p>
              </div>
            </div>
          ))} */}
        {userData && userData?.pr && userData?.pr.length === 0 && (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <h1 className="font-bold text-[1.3rem]">Leaderboard not set</h1>
            <h2 className="font-bold text-[1rem]">Starts from 1st Oct</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaderBoard;
