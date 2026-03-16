import { MdPhoneIphone } from "react-icons/md";
import { FaTshirt } from "react-icons/fa";
import { BsCreditCard2BackFill } from "react-icons/bs";

import "../styles/landing.css";

const Steps = () => {
  return (
    <section className="steps">
      <h2 style={{ color: "white" }}>Confira o cronograma do evento 🚀</h2>

      <div className="steps-grid">
        <div className="step">
          <h3>Aula 1 - Ao Vivo</h3>
          <h1>24/03</h1>
          <h2>Terça, as 20h</h2>
          <hr />
          <p>
            <MdPhoneIphone style={{ fontSize: "20px" }} />
          </p>
          <p className="p2-step">Criação de Loja de Eletronicos </p>
        </div>

        <div className="step">
          <h3>Aula 2 - Ao Vivo</h3>
          <h1>25/03</h1>
          <h2>Quarta, as 20h</h2>
          <hr />
          <p>
            <FaTshirt style={{ fontSize: "20px" }} />
          </p>
          <p className="p2-step">Criação de Loja de Roupas e Calçados </p>
        </div>

        <div className="step">
          <h3>Aula 3 - Ao Vivo</h3>
          <h1>26/03</h1>
          <h2>Quinta, as 20h</h2>
          <hr />
          <p>
            <BsCreditCard2BackFill style={{ fontSize: "20px" }} />
          </p>
          <p className="p2-step">
            Configuração de Forma de Pagamento e da loja no Instagram
          </p>
        </div>
      </div>
      <button style={{ margin: "40px 0" }} className="cta">
        Inscrever-me Agora
      </button>
    </section>
  );
};

export default Steps;
