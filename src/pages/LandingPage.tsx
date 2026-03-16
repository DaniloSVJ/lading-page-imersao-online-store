import Hero from "../components/Hero";
import Steps from "../components/Steps";
import Learn from "../components/Learn";
import Teacher from "../components/Teacher";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <main style={{ width: "100%" }}>
      <Hero />
      <Learn />
      <Steps />
      <Teacher />
      <Footer />
    </main>
  );
};

export default LandingPage;
