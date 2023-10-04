import { useState } from "react";
import { useDispatch } from "react-redux";

import { postContactUsEmail } from "../../redux/misc/miscActions";

import DiscordIcon from "../icons/Discord";

export default function Contact() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const contactUsHandler = async (e: any) => {
    e.preventDefault();
    dispatch(postContactUsEmail(email));
    setEmail("");
  };
  return (
    <div
      className="w-full mt-[8rem] flex justify-center md:mb-0 mb-4"
      id="contact"
    >
      <div className="w-[90%] flex flex-col items-center md:gap-8 gap-4 box-border py-6 rounded-[20px] bg-gradient-to-r from-[#4D58FF] to-[#78B4FF] shadow-custom">
        <h2 className="uppercase font-bold text-[2.3rem]">CONTACT US</h2>
        <p className="w-[70%] text-center">
          Visit official website for registration -&nbsp;
          <a
            href="https://debug0.tech/"
            target="_blank"
            className="text-[#fbdb75]"
          >
            here
          </a>
        </p>
        <div className="w-[70%] text-center flex flex-col md:flex-row items-center justify-center">
          <span>Join discord server for every information -&nbsp;</span>
          <span
            className="cursor-pointer"
            onClick={() => window.open("https://discord.gg/KmERJh2y")}
          >
            <DiscordIcon fill="white" />
          </span>
        </div>
        <form
          onSubmit={contactUsHandler}
          className="md:w-[60%] w-[90%] h-12 rounded-[30px] md:mt-0 mt-4 bg-yellow-500 flex flex-row items-center box-border overflow-hidden relative"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full h-full focus:border-none focus:outline-none placeholder:text-[#E1E1E1] placeholder:text-[1rem] text-[#4d58ff] font-bold text-[1rem] text-center"
            placeholder="Enter Your Email Here..."
          />
          <button
            type="submit"
            className="absolute right-1 bottom-[50%] translate-y-[50%] px-4 py-2 rounded-[30px] uppercase font-bold outline-none border-none bg-[#4d58ff]"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}
