import Hero from "../components/Hero";
import Steps from "../components/Steps";
import Learn from "../components/Learn";
import Teacher from "../components/Teacher";
import Form from "../components/Form";

const LandingPage = () => {
  return (
    <main style={{ width: "100%" }}>
      <Hero />
      <Learn />
      <Steps />
      <Teacher />
      <Form />
    </main>
  );
};

export default LandingPage;
