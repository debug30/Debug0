import collabData from "../../utils/static/collaboratorsData";

const Collaborators = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center" id="team">
      <h2 className="text-[2.5rem] mt-[6rem] mb-8 md:mb-[8rem] drop-shadow-custom uppercase text-highlightColor font-bold">
        COLLABORATORS
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {collabData &&
          collabData.length > 0 &&
          collabData.map((collab: any, index: number) => (
            <div
              key={index}
              className="flex-grow-1 flex-shrink-0 w-[15rem] h-[15rem]rounded-[10px] rounded-[10px] overflow-hidden cursor-pointer"
              onClick={() => window.open(`${collab.link}`, "_blank")}
            >
              <img
                src={collab.img}
                alt={`collaborator-image${index}`}
                className="w-full h-auto hover:scale-105 transform transition-transform duration-300"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Collaborators;
