import { useEffect, useState } from "react";

const Hero = () => {
  const eventDate = new Date("October 30, 2023 00:00:00").getTime();

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const formatTwoDigits = (value: any) => value.toString().padStart(2, "0");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = eventDate - now >= 0 ? eventDate - now : 0;

      const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutesLeft = Math.floor(
        (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
      );

      setDays(formatTwoDigits(daysLeft));
      setHours(formatTwoDigits(hoursLeft));
      setMinutes(formatTwoDigits(minutesLeft));

      if (timeLeft < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="w-[100%] mt-[3rem] flex justify-center">
      <div className="w-[80%] text-center">
        <div className="flex flex-col items-center]">
          <h2 className="text-[2rem] drop-shadow-custom">
            Month long{" "}
            <b className="text-highlightColor">Open Source Hackathon</b>
          </h2>
          {/* <p className="mt-12 md:w-[70%]">
            DEBUG.0 is a month-long celebration of open source software, where
            anyone can contribute to open source projects (whether a newbie or a
            experienced we are open to all) and earn free swags.
          </p> */}
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[4rem] mt-[2rem] mb-[2rem] drop-shadow-custom">
            <b className="text-highlightColor uppercase">
              DEBUG.0 in Full Swing
            </b>
            <p className="text-[2.5rem] mt-4">Time Left</p>
          </h1>
          <div className="flex flex-row gap-4 drop-shadow-custom mt-8 mb-8 md:m-0">
            <span className="flex flex-col">
              <span className="text-[2rem] md:text-[4rem] text-highlightColor font-bold">
                {days}
              </span>
              <span className="text-[0.9rem] md:text-[1.2rem]">Days</span>
            </span>
            <span className="text-[2rem] md:text-[4rem] text-highlightColor font-bold">
              :
            </span>
            <span className="flex flex-col">
              <span className="text-[2rem] md:text-[4rem] text-highlightColor font-bold">
                {hours}
              </span>
              <span className="text-[0.9rem] md:text-[1.2rem]">Hours</span>
            </span>
            <span className="text-[2rem] md:text-[4rem] text-highlightColor font-bold">
              :
            </span>
            <span className="flex flex-col">
              <span className="text-[2rem] md:text-[4rem] text-highlightColor font-bold">
                {minutes}
              </span>
              <span className="text-[0.9rem] md:text-[1.2rem]">Minutes</span>
            </span>
          </div>
        </div>
        <h1 className="text-[3rem] mt-[2rem] mb-[2rem] drop-shadow-custom uppercase text-highlightColor font-bold">
          REGISTERATION OVER
        </h1>
      </div>
    </div>
  );
};

export default Hero;
