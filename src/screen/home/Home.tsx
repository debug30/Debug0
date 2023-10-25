import { useEffect } from "react";
import { useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";

//components
import NavBar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Apply from "../../components/apply/Apply";
import Timeline from "../../components/timeline/Timeline";
import Socials from "../../components/socials/Socials";
import Team from "../../components/team/Team";
import Contact from "../../components/contact/Contact";
import Collaborators from "../../components/collaborators/Collaborators";

import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const { postContactResp, postContactError, postContactErrorMsg } =
    useSelector((state: any) => state.misc);
  useEffect(() => {
    if (Object.keys(postContactResp).length > 0 && !postContactError) {
      toast.info("We'll contact you shortly!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    if (postContactError && postContactErrorMsg) {
      toast.error(postContactErrorMsg, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }, [postContactResp, postContactError, postContactErrorMsg]);

  return (
    <div className="px-6 py-4 md:p-[2rem_4rem]">
      <NavBar />
      <Socials />
      <Hero />
      <Apply />
      <Timeline />
      <Team />
      <Collaborators/>
      <Contact />
      <ToastContainer />
    </div>
  );
};

export default Home;
