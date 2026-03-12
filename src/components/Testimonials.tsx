import "../styles/landing.css";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>O que dizem quem já participou</h2>

      <div className="testimonials-grid">
        <div className="testimonial">
          <p>"Consegui minha primeira venda em 5 dias."</p>
          <span>— João Silva</span>
        </div>

        <div className="testimonial">
          <p>"Aprendi tudo passo a passo e agora vendo todos os dias."</p>
          <span>— Maria Souza</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
