import { useState, useRef } from "react";
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

const LeaderBoard = () => {
  const { userData } = useSelector((state: any) => state.user);
  const windowWidth = useRef(window.innerWidth).current;
  const [toggleOpen, setToggleOpen] = useState(-1);

  const handleOpenPRDetails = (i: number) => {
    setToggleOpen((prev) => (prev === i ? -1 : i));
  };

  return (
    <div className="w-full h-[100vh] flex flex-col items-center md:p-8 p-4  md:rounded-[0px_10px_10px_0px] rounded-[0px_0_10px_10px] bg-opacity-5 backdrop-blur-md bg-[#7886c3] border-[1px] border-[#7886c342]">
      <h1 className="w-full font-bold text-[1.3rem] mb-4 uppercase">MY PR</h1>
      <div className="w-full h-full rounded-lg bg-[#a378c318] flex flex-col overflow-y-scroll overflow-x-hidden">
        {userData &&
          userData?.pr &&
          userData?.pr.length > 0 &&
          userData.pr.map((pr: any, index: number) => (
            // DUMMY_PR &&
            //   DUMMY_PR?.length > 0 &&
            //   DUMMY_PR.map((pr: any, index: number) => (
            <div
              key={index}
              className="flex md:flex-row flex-col md:px-8 px-5 md:py-3 py-4 w-full items-center justify-between md:justify-normal cursor-pointer hover:bg-[#5151a46b] z-[7]"
              onClick={() => {
                if (windowWidth >= 768) window.open(pr.issueUrl, "_blank");
                else handleOpenPRDetails(index);
              }}
            >
              <div className="flex flex-row items-center justify-between w-full">
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
                <div className="md:hidden ml-auto z-[8]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div className="text-center md:block hidden">
                    <p>Created At</p>
                    <p className="text-[0.7rem]">{formatDate(pr.created_At)}</p>
                  </div>
                  <div className="text-center ml-auto md:block hidden">
                    <p>Closed At</p>
                    <p className="text-[0.7rem]">{formatDate(pr.closed_At)}</p>
                  </div>
                </div>
              </div>
              {toggleOpen === index && (
                <div className="flex flex-row  pt-2 mt-2 border-t border-[#7886c36f] border-solid border-1 w-[95%]">
                  <div className="text-center">
                    <p>Created At</p>
                    <p className="text-[0.7rem]">{formatDate(pr.created_At)}</p>
                  </div>
                  <div className="text-center ml-auto">
                    <p>Closed At</p>
                    <p className="text-[0.7rem]">{formatDate(pr.closed_At)}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        {userData && userData?.pr && userData?.pr.length === 0 && (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <h1 className="font-bold text-[1.3rem]">
              Leaderboard not set yet.
            </h1>
            <h2 className="font-bold text-[1rem]">
              Contribution starts from 1st Oct!
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaderBoard;
