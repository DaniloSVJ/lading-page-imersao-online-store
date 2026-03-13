import "../styles/landing.css";

const Teacher = () => {
  return (
    <section className="teacher">
      <div className="teacher-content">
        <h1>Quem vai te ensinar</h1>

        <div className="teacher-text">
          <div>
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Professor"
            />
          </div>
          <h2>DANILO SAMPAIO</h2>
          <div className="container-paragraphs">
            <p>
              Com mais de 10 anos de experiência em desenvolvimento web, percebi
              que muitos comércios não criam sua loja virtual por acharem
              complexo ou por falta de tempo. Resolvi compartilhar todo meu
              conhecimento para ajudar alavancar seu negócio
            </p>

            <p style={{ fontWeight: "bold", margin: "7px 0" }}>
              Durante a pandemia, muitos desses negócios fecharam por não terem
              um e-commerce ou sistema de entregas.
            </p>

            <p>
              A crise passou, <strong>mas os riscos continuam</strong>. Em um
              cenário incerto no mundo, ter presença online{" "}
              <strong>deixou de ser opção — é uma necessidade </strong>para
              manter o negócio vivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teacher;
