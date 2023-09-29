//css
import classes from "./socials.module.css";

//assets
import InstagramIcon from "../icons/InstagramIcon";
import LinkedinIcon from "../icons/LinkedInIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import DiscordIcon from "../icons/Discord";

export default function Socials() {
  return (
    <div className="fixed flex flex-col w-[5rem] h-[15rem] gap-3 items-center justify-center right-0 top-1/2 transform -translate-y-1/2 rounded-l-xl p-[1rem_1rem_1rem_2rem] bg-opacity-25 backdrop-blur-md bg-[#7886c3] z-10">
      <a
        className={`${classes.icons} ${classes.discord}`}
        href="https://discord.gg/KmERJh2y"
        target="_blank"
      >
        <DiscordIcon />
      </a>
      <a
        className={`${classes.icons} ${classes.instagram}`}
        href=""
        target="_blank"
      >
        <InstagramIcon />
      </a>
      <a
        className={`${classes.icons} ${classes.linkedin}`}
        href=""
        target="_blank"
      >
        <LinkedinIcon />
      </a>
      <a
        className={`${classes.icons} ${classes.youtube}`}
        href=""
        target="_blank"
      >
        <YoutubeIcon />
      </a>
    </div>
  );
}
