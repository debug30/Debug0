export default function Contact() {
  const contactUsHandler = async () => {
    alert("Sent!");
  };
  return (
    <div className="w-full mt-[8rem] flex justify-center" id="contact">
      <div className="w-[90%] flex flex-col items-center gap-8 box-border py-6 rounded-[20px] bg-gradient-to-r from-[#4D58FF] to-[#78B4FF] shadow-custom">
        <h2 className="uppercase font-bold text-[2.3rem]">CONTACT US</h2>
        <p className="w-[70%] text-center">
          Visit official website for registration - https://debug0.tech/
        </p>
        <p className="w-[70%] text-center">
          Join discord server for every information -
          https://discord.gg/KmERJh2y
        </p>
        <div className="w-[60%] h-16 rounded-[30px] bg-yellow-500 flex flex-row items-center box-border overflow-hidden relative">
          <input
            type="email"
            className="w-full h-full focus:border-none focus:outline-none placeholder:text-[#E1E1E1] placeholder:text-[1rem] text-[#4d58ff] font-bold text-[1.2rem] text-center"
            placeholder="Enter Your Email Here..."
          />
          <button
            className="absolute right-1 bottom-[50%] translate-y-[50%] px-8 py-4 rounded-[30px] uppercase font-bold outline-none border-none bg-[#4d58ff]"
            onClick={contactUsHandler}
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  );
}
