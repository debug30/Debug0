//icons
import Github from "../../components/icons/GitHub";
import LinkedinIcon from "../../components/icons/LinkedInIcon";

export interface ITeamCardProps {
  name: string;
  position: string;
  image: string;
  socials: {
    linkedin: string;
    github: string;
  };
  about: string;
  uniqueKey: number;
}

export function TeamCard(props: ITeamCardProps) {
  return (
    <div
      key={props.uniqueKey}
      className="w-[16rem] h-[16rem] box-border p-6 flex flex-col rounded-[20px] relative bg-[#7a7aba] before:absolute before:top-[-0.25rem] before:left-[-0.25rem] before:box-border before:content-[''] before:w-[16.5rem] before:h-[16.5rem] before:rounded-[24px] before:z-[-1] before:bg-gradient-to-b from-[#9AFFFF] to-[#4D58FF] before:shadow-custom select-none"
    >
      <div className="flex flex-row w-full justify-start items-center gap-8 mb-6">
        <div className="w-[100px] h-[80px] bg-gradient-to-b from-[#727AFF] to-[#E4C8ED] rounded-[15px] relative">
          <img
            src={props.image}
            alt="member-profile"
            className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[80%]"
          />
        </div>
        <h3 className="capitalize font-bold text-[1.3rem]">{props.position}</h3>
      </div>
      <div className="flex flex-col gap-1 w-[90%]">
        <h3 className="uppercase font-bold text-[1.2rem]">{props.name}</h3>
        <p className="text-[0.8rem]">{props.about}</p>
      </div>
      <div className="flex flex-col justify-end items-center absolute bottom-8 right-2 gap-4">
        <div
          className="cursor-pointer"
          onClick={() => {
            window.open(props.socials.github, "_blank"); // Replace with the correct prop name
          }}
        >
          <Github />
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            window.open(props.socials.linkedin, "_blank"); // Replace with the correct prop name
          }}
        >
          <LinkedinIcon />
        </div>
      </div>
    </div>
  );
}
