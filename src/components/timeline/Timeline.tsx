//assets
import timelineBG from "../../assets/images/timelineBG.png";

export default function Timeline() {
  return (
    <div className="w-full flex flex-col items-center" id="timeline">
      <h2 className="text-[3rem] mt-[6rem] mb-[2rem] drop-shadow-custom uppercase text-highlightColor font-bold">
        TIMELINE
      </h2>
      <div className="w-full flex justify-center relative">
        <div
          className="hidden md:flex bg-center bg-cover md:w-[80%] relative flex-row justify-center"
          style={{ backgroundImage: `url(${timelineBG})` }}
        >
          <div className="mt-[17rem] mr-[1rem] flex flex-col gap-[10rem]">
            <div className="w-[25rem] h-[7rem] rounded-[15px] bg-gradient-to-r from-[#FBDE75] via-[#fcc470] to-[#FCA969] flex flex-col justify-center items-center">
              <h2 className="text-[1.5rem] font-bold uppercase">
                CONTRIBUTION BEGINS
              </h2>
              <p className="text-[0.8rem]">OCT 1</p>
            </div>
            <div className="w-[25rem] h-[7rem] rounded-[15px] bg-gradient-to-r from-[#FFD0D7] via-[#ffbdc6] to-[#FFAAB6] flex flex-col justify-center items-center">
              <h2 className="text-[1.5rem] font-bold uppercase">
                MID EVALUTIONS
              </h2>
              <p className="text-[0.8rem]">OCT 15</p>
            </div>
            <div className="w-[25rem] h-[7rem] rounded-[15px] bg-gradient-to-r from-[#d0ffd3] via-[#bdffc6] to-[#aaffb7] flex flex-col justify-center items-center">
              <h2 className="text-[1.5rem] font-bold uppercase">
                END EVALUTIONS
              </h2>
              <p className="text-[0.8rem]">OCT 29-30</p>
            </div>
          </div>
          <div className="h-full w-[20.8px] bg-[#4d58ff] drop-shadow-[0_5px_12px_rgba(0,0,0,0.4)] rounded-[20px_0_20px_0] relative before:content-[''] before:absolute before:top-0 before:left-[1rem] before:h-[1.3rem] before:w-[calc(49.5vw)] before:bg-[#4d58ff] after:content-[''] after:absolute after:bottom-0 after:right-[1rem] after:h-[1.3rem] after:w-[calc(52vw)] after:bg-[#4d58ff]" />
          <div className="mt-[8rem] ml-[1rem] mb-[8rem] flex flex-col gap-[10rem]">
            <div className="w-[25rem] h-[7rem] rounded-[15px] bg-gradient-to-r from-[#6065FD] via-[#888CFF] to-[#7675FB] flex flex-col justify-center items-center">
              <h2 className="text-[1.5rem] font-bold uppercase">
                REGISTRATION BEGINS
              </h2>
              <p className="text-[0.8rem]">SEP 29</p>
            </div>
            <div className="w-[25rem] h-[7rem] rounded-[15px] bg-gradient-to-r from-[#A94F9C] via-[#d469c4] to-[#FF84ED] flex flex-col justify-center items-center">
              <h2 className="text-[1.5rem] font-bold uppercase">
                EXPERTS TALK
              </h2>
              <p className="text-[0.8rem]">OCT 7-8</p>
            </div>
            <div className="w-[25rem] h-[7rem] rounded-[15px] bg-gradient-to-r from-[#DEA47A] via-[#eec0a6] to-[#FDDCD4] flex flex-col justify-center items-center">
              <h2 className="text-[1.5rem] font-bold uppercase">
                EXPERTS TALK
              </h2>
              <p className="text-[0.8rem]">OCT 21</p>
            </div>
            <div className="w-[25rem] h-[7rem] rounded-[15px] bg-gradient-to-r from-[#de7a8b] via-[#eea6a6] to-[#fdd4db] flex flex-col justify-center items-center">
              <h2 className="text-[1.5rem] font-bold uppercase">
                SWAGS AND CERTIFICATES
              </h2>
              <p className="text-[0.8rem]">NOV 1-5</p>
            </div>
          </div>
        </div>
        <div
          className="flex md:hidden bg-center bg-contain bg-no-repeat md:w-[80%] relative flex-row justify-center"
          style={{ backgroundImage: `url(${timelineBG})` }}
        >
          <div className="mt-4 flex flex-col gap-[3rem] items-center">
            <div className="w-[80%] h-[7rem] rounded-[15px] bg-gradient-to-r from-[#6065FD] via-[#888CFF] to-[#7675FB] flex flex-col justify-center items-center">
              <h2 className="text-[1.5rem] font-bold uppercase text-center">
                REGISTRATION BEGINS
              </h2>
              <p className="text-[0.8rem]">SEP 29</p>
            </div>
            <div className="w-[80%] h-[7rem] rounded-[15px] bg-gradient-to-r from-[#FBDE75] via-[#fcc470] to-[#FCA969] flex flex-col justify-center items-center">
              <h2 className="text-[1.5rem] font-bold uppercase text-center">
                CONTRIBUTION BEGINS
              </h2>
              <p className="text-[0.8rem]">OCT 1</p>
            </div>
            <div className="w-[80%] h-[7rem] rounded-[15px] bg-gradient-to-r from-[#A94F9C] via-[#d469c4] to-[#FF84ED] flex flex-col justify-center items-center">
              <h2 className="text-[1.5rem] font-bold uppercase text-center">
                EXPERTS TALK
              </h2>
              <p className="text-[0.8rem]">OCT 7-8</p>
            </div>
            <div className="w-[80%] h-[7rem] rounded-[15px] bg-gradient-to-r from-[#FFD0D7] via-[#ffbdc6] to-[#FFAAB6] flex flex-col justify-center items-center">
              <h2 className="text-[1.5rem] font-bold uppercase text-center">
                MID EVALUTIONS
              </h2>
              <p className="text-[0.8rem]">OCT 15</p>
            </div>
            <div className="w-[80%] h-[7rem] rounded-[15px] bg-gradient-to-r from-[#DEA47A] via-[#eec0a6] to-[#FDDCD4] flex flex-col justify-center items-center">
              <h2 className="text-[1.5rem] font-bold uppercase text-center">
                EXPERTS TALK
              </h2>
              <p className="text-[0.8rem]">OCT 21</p>
            </div>
            <div className="w-[80%] h-[7rem] rounded-[15px] bg-gradient-to-r from-[#d0ffd3] via-[#bdffc6] to-[#aaffb7] flex flex-col justify-center items-center">
              <h2 className="text-[1.5rem] font-bold uppercase text-center">
                END EVALUTIONS
              </h2>
              <p className="text-[0.8rem]">OCT 29-30</p>
            </div>
            <div className="w-[80%] h-[7rem] rounded-[15px] bg-gradient-to-r from-[#de7a8b] via-[#eea6a6] to-[#fdd4db] flex flex-col justify-center items-center">
              <h2 className="text-[1.5rem] font-bold uppercase text-center">
                SWAGS AND CERTIFICATES
              </h2>
              <p className="text-[0.8rem]">NOV 1-5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
