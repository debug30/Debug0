//components
import NavBar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Apply from "../../components/apply/Apply";
import Timeline from "../../components/timeline/Timeline";
import Socials from "../../components/socials/Socials";
import Team from "../../components/team/Team";
import Contact from "../../components/contact/Contact";

const Home = () => {
  return (
    <div className="px-6 py-4 md:p-[2rem_4rem]">
      <NavBar />
      <Socials />
      <Hero />
      <Apply />
      <Timeline />
      <Team />
      <Contact />
    </div>
  );
};

export default Home;
