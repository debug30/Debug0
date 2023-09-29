//react
import { useState } from "react";

//utils
import { TeamCard } from "../../utils/ui/TeamCard";

//static
import teamdata from "../../utils/static/teamdata";

//assets
import AngleLeft from "../icons/AngleLeft";
import AngleRight from "../icons/AngleRight";

const Team = () => {
  const membersPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * membersPerPage;
  const endIndex = startIndex + membersPerPage;
  const visibleMembers = teamdata.slice(startIndex, endIndex);

  const totalPages = Math.ceil(teamdata.length / membersPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center" id="team">
      <h2 className="text-[3rem] mt-[6rem] mb-[8rem] drop-shadow-custom uppercase text-highlightColor font-bold">
        OUR TEAM
      </h2>
      <section className="flex flex-row gap-10 items-center justify-center w-full">
        <div
          className="cursor-pointer"
          onClick={() =>
            handlePageChange(currentPage > 0 ? currentPage - 1 : totalPages - 1)
          }
        >
          <AngleLeft />
        </div>
        <div className="flex flex-row gap-12 w-min">
          {visibleMembers.map((member, index) => (
            <TeamCard
              uniqueKey={index}
              name={member.name}
              position={member.position}
              socials={member.socials}
              about={member.about}
              image={member.image}
            />
          ))}
        </div>
        <div
          className="cursor-pointer"
          onClick={() =>
            handlePageChange(currentPage < totalPages - 1 ? currentPage + 1 : 0)
          }
        >
          <AngleRight />
        </div>
      </section>
      <div className="flex flex-row w-full justify-center items-center gap-4 mt-8">
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <span
            key={pageIndex}
            className={`w-4 h-4 rounded-[50%] bg-[#7a7aba] cursor-pointer ${
              pageIndex === currentPage ? "bg-[#9AFFFF]" : ""
            }`}
            onClick={() => handlePageChange(pageIndex)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Team;
