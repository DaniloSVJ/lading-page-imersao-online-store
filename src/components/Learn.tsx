import { FaCalendarCheck, FaInstagramSquare } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";

import { PiScreencastFill } from "react-icons/pi";

import "../styles/landing.css";
const Learn = () => {
  return (
    <section className="learn">
      <div className="learn-grid">
        <div className="learn-item">
          <p>
            <FaCalendarCheck />
            &nbsp;24 à 26 de Março
          </p>
        </div>
        <div className="learn-item">
          <p>
            <PiScreencastFill />
            &nbsp;100% Online e Gratuito
          </p>
        </div>
        <div className="learn-item">
          <p>
            <FaMoneyBillTransfer />
            &nbsp;Sua Loja em 1 dia
          </p>
        </div>
        <div className="learn-item">
          <p>
            <FaInstagramSquare />
            &nbsp;Venda pela o Instagram
          </p>
        </div>
      </div>
    </section>
  );
};
export default Learn;
