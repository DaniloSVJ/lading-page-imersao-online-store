import "../styles/landing.css";

const Footeer = () => {
  return (
    <section className="footeer">
      <div className="footeer-container">
        <h1>Vamos juntos mudar o jogo</h1>
        <p id="p-footeer" style={{ textAlign: "center", color: "white" }}>
          Clique no botão abaixo e faça sua inscricao
        </p>

        <button type="button">Inscrever-me agora</button>
      </div>
    </section>
  );
};

export default Footeer;
