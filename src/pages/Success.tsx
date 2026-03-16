import "./../styles/success.css";

const Success = () => {
  const whatsappLink =
    "https://chat.whatsapp.com/BAcZ98yEKBQ0Mh0jsVIwnZ?mode=gi_t";

  const handleRedirect = () => {
    window.location.href = whatsappLink;
  };

  return (
    <div className="success-container">
      <div className="success-card">
        <h1>🎉 Parabéns!</h1>

        <p>Sua inscrição foi realizada com sucesso.</p>

        <p className="important">
          Para finalizar sua participação, entre no grupo do WhatsApp clicando
          no botão abaixo.
        </p>

        <button onClick={handleRedirect}>Entrar no Grupo do WhatsApp</button>

        <span className="note">
          No grupo você receberá todas as informações do evento.
        </span>
      </div>
    </div>
  );
};

export default Success;
