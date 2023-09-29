//react
import { useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
//actions
import { chooseRole, closeModal } from "../../redux/register/registerActions";

//assets
import maintainerLogo from "../../assets/images/screw-driver.png";
import contributorLogo from "../../assets/images/puzzle.png";
import GithubIcon from "../../components/icons/GitHub";

const Register = () => {
  const dispatch = useDispatch();
  const { registerAs } = useSelector((state: any) => state.register);

  const handleChooseRole = (role: any) => {
    dispatch(chooseRole(role));
  };

  const handleCloseForm = () => {
    dispatch(closeModal());
    dispatch(chooseRole(""));
  };

  const handleLoginRequest = () => {
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${
        import.meta.env.VITE_GITHUB_CLIENT_ID
      }&redirect_uri=${`http://localhost:5173/?registeredAs=${registerAs}`}&allow_signup&scope=user:email%20user:name`
    );
  };

  return (
    <div className="w-[40rem] box-border flex flex-col items-center bg-white text-black p-8 rounded-[20px] shadow-register">
      <div>
        <h1 className="text-[3rem] mb-[1rem] font-bold text-[#5151a4] text-center uppercase">
          LOGIN AS
        </h1>
        <div className="flex flex-row gap-8">
          <div
            className={`flex flex-row gap-4 items-center justify-center p-4 rounded-[10px] font-semibold cursor-pointer hover:bg-[#7C81AD] hover:text-white shadow-registerBtn ${
              registerAs === "MAINTAINER" ? "bg-[#7C81AD] text-white" : ""
            }`}
            onClick={() => handleChooseRole("MAINTAINER")}
          >
            <img src={maintainerLogo} alt="maintainer" />
            <span>MAINTAINER</span>
          </div>
          <div
            className={`flex flex-row gap-4 items-center justify-center p-4 rounded-[10px] font-semibold cursor-pointer hover:bg-[#7C81AD] hover:text-white shadow-registerBtn ${
              registerAs === "CONTRIBUTOR" ? "bg-[#7C81AD] text-white" : ""
            }`}
            onClick={() => handleChooseRole("CONTRIBUTOR")}
          >
            <img src={contributorLogo} alt="contributor" />
            <span>CONTRIBUTOR</span>
          </div>
        </div>
      </div>
      {registerAs && (
        <button
          className="flex flex-row gap-8 items-center outline-none border-none bg-black rounded-[10px] px-16 py-4 text-white font-semibold mt-[2.5rem]"
          onClick={handleLoginRequest}
        >
          <span>Login with GitHub</span>
          <span>
            <GithubIcon />
          </span>
        </button>
      )}
      {/* {registerAs && (
        <div className="w-full">
          <h1 className="text-[3rem] mb-[1rem] font-bold text-[#5151a4] text-center">
            Your Details
          </h1>
          <form className="flex flex-col gap-6 mb-[3rem]">
            <input
              type="text"
              id="name"
              name="name"
              className="w-full h-[3.5rem] px-4 py-2 border rounded-md shadow-registerBtn outline-none border-none text-[#aeaeae] font-semibold"
              placeholder="Name"
              required
              // Add value and onChange handlers to manage the input state
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="email"
              id="email"
              name="email"
              className="w-full h-[3.5rem] px-4 py-2 border rounded-md shadow-registerBtn outline-none border-none text-[#aeaeae] font-semibold"
              placeholder="Email"
              required
              // Add value and onChange handlers to manage the input state
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              id="college"
              name="college"
              className="w-full h-[3.5rem] px-4 py-2 border rounded-md shadow-registerBtn outline-none border-none text-[#aeaeae] font-semibold"
              placeholder="College"
              required
              // Add value and onChange handlers to manage the input state
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              id="discordId"
              name="discordId"
              className="w-full h-[3.5rem] px-4 py-2 border rounded-md shadow-registerBtn outline-none border-none text-[#aeaeae] font-semibold"
              placeholder="Discord ID"
              required
              // Add value and onChange handlers to manage the input state
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="url"
              id="github"
              name="github"
              className="w-full h-[3.5rem] px-4 py-2 border rounded-md shadow-registerBtn outline-none border-none text-[#aeaeae] font-semibold"
              placeholder="Github Link"
              required
              // Add value and onChange handlers to manage the input state
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </form>
          <div className="w-full flex flex-row justify-between items-center">
            <button
              className="p-4 rounded-[10px] font-semibold bg-[#5151a4] text-white hover:bg-[#2E4374] shadow-registerBtn"
              onClick={() => handleChooseRole("")}
            >
              PREVIOUS
            </button>
            <button
              className="p-4 rounded-[10px] font-semibold bg-red-400 text-white hover:bg-red-500 shadow-registerBtn"
              onClick={handleCloseForm}
            >
              CANCEL
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Register;