import { useNavigate } from "react-router-dom";
import "../styles/landing.css";

const Footer = () => {
  const navigate = useNavigate();

  function handleSubscribe() {
    navigate("/inscricao");
  }
  return (
    <section className="footer">
      <div className="footer-container">
        <h1>Vamos juntos mudar o jogo</h1>
        <p id="p-footer" style={{ textAlign: "center", color: "white" }}>
          Clique no botão abaixo e faça sua inscricao
        </p>

        <button type="button" onClick={handleSubscribe}>
          Inscrever-me agora
        </button>
      </div>
    </section>
  );
};

export default Footer;
