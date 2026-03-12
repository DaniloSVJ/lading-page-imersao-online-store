import "../styles/landing.css";

const Steps = () => {
  return (
    <section className="steps">
      <h2>Siga o passo a passo 🚀</h2>

      <div className="steps-grid">
        <div className="step">
          <h3>1. Cadastre-se</h3>
          <p>Preencha o formulário e garanta sua vaga.</p>
        </div>

        <div className="step">
          <h3>2. Acesse o grupo VIP</h3>
          <p>Receba todas as informações no WhatsApp.</p>
        </div>

        <div className="step">
          <h3>3. Assista às aulas</h3>
          <p>Implemente sua loja com passo a passo prático.</p>
        </div>
      </div>
      <button style={{ margin: "40px 0" }} className="cta">
        Inscrever-me Agora
      </button>
    </section>
  );
};

export default Steps;
