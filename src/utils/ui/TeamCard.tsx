//icons
import DefaultUser from "../../components/icons/DefaultUser";
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
        <div
          className="w-[40px] h-[40px] rounded-[50%] text-black font-bold relative before:absolute before:top-[-2.5px] before:left-[-2.5px] before:box-border before:content-[''] before:w-[45px] before:h-[45px] before:rounded-[50%] before:z-[-1] before:bg-gradient-to-b from-[#9af5ff] to-[#a900cb] cursor-pointer"
          onClick={() => window.open(props.image, "_blank")}
        >
          {props.image && (
            <img
              src={props.image}
              alt="user-profile-picture"
              className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover rounded-[50%]"
            />
          )}
          <DefaultUser />
        </div>
        <h3 className="capitalize font-bold text-[1.3rem]">{props.position}</h3>
      </div>
      <div className="flex flex-col gap-1 w-[90%] ">
        <h3 className="uppercase font-bold text-[1.2rem]">{props.name}</h3>
        <pre className="text-[0.8rem] whitespace-pre-wrap">{props.about}</pre>
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
