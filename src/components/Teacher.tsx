import "../styles/landing.css";

const Teacher = () => {
  return (
    <section className="teacher">
      <div className="teacher-content">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Professor"
        />

        <div className="teacher-text">
          <h2>Quem vai te ensinar</h2>

          <p>
            Um especialista com experiência real em e-commerce e vendas online.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Teacher;
