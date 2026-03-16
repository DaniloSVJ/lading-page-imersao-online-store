import "../styles/landing.css";
import { useNavigate } from "react-router-dom";
import { FaCalendar } from "react-icons/fa";

const Hero = () => {
  const navigate = useNavigate();

  function handleSubscribe() {
    navigate("/inscricao");
  }
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 id="hero-h1-1">Imersão da Loja Virtual🎯</h1>
          {/* Transforme sua ideia em uma loja online que vende de verdade, em
            apenas 3 dias. */}
          <p id="hero-p-1" style={{ textAlign: "center" }}>
            Aprenda em poucos passos criar uma loja virtual
          </p>
          <h1 id="hero-h1-1" style={{ fontSize: "39px" }}>
            <FaCalendar style={{ fontSize: "30px" }} /> 24 à 26 de Março
          </h1>

          <button
            style={{ marginBottom: "10px" }}
            className="cta"
            onClick={handleSubscribe}
          >
            Quero me inscrever
          </button>

          {/* <small>
            Não vamos te enviar spam — seus dados serão usados apenas para essa
            imersão.
          </small> */}
        </div>
        {/* 
        <div className="hero-image">
          <img src={computer} alt="Loja virtual" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
