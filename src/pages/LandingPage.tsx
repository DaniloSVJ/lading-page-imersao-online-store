import Hero from "../components/Hero";
import Steps from "../components/Steps";
import Learn from "../components/Learn";
import Teacher from "../components/Teacher";
import Footeer from "../components/Footeer";

const LandingPage = () => {
  return (
    <main style={{ width: "100%" }}>
      <Hero />
      <Learn />
      <Steps />
      <Teacher />
      <Footeer />
    </main>
  );
};

export default LandingPage;
