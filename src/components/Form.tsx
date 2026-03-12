import "../styles/landing.css";

const Form = () => {
  return (
    <section className="form">
      <div className="form-container">
        <h2 style={{ textAlign: "center" }}>Garanta sua vaga</h2>

        <form>
          <input type="text" placeholder="Nome completo" required />
          <input type="email" placeholder="Seu melhor e-mail" required />
          <input type="tel" placeholder="Telefone/WhatsApp" required />

          <button type="submit">Inscrever-me agora</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
