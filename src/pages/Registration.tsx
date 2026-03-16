import { useState } from "react";
import "../styles/registration.css";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../api/api";
const Registration = () => {
  const [form, setForm] = useState({
    name: "",

    email: "",

    phone: "",

    gender: "",

    ageRange: "",

    businessType: "",

    sellsOnline: "",

    monthlyRevenue: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  const navigate = useNavigate();
  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      gender: form.gender,
      ageRange: form.ageRange,
      businessType: form.businessType,
      sellsOnline: form.sellsOnline,
      monthlyRevenue: form.monthlyRevenue,
    };
    console.log(form);
    try {
      const teste = await apiFetch("leads", {
        method: "POST",
        body: JSON.stringify(data),
      });
      console.log(teste);
      navigate("/success");
    } catch (error) {
      console.error("Erro ao enviar lead", error);
    }

    // Aqui depois você envia para sua API
  }

  return (
    <div className="registration-container">
      <div className="registration-card">
        <h1>Quase lá 🚀</h1>
        <p>Preencha os dados abaixo para garantir sua vaga.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Seu melhor email"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="WhatsApp"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <select
            name="gender"
            onChange={handleChange}
            value={form.gender}
            required
          >
            <option value="">Sexo</option>
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
          </select>

          <select
            name="ageRange"
            onChange={handleChange}
            value={form.ageRange}
            required
          >
            <option value="">Faixa etária</option>
            <option value="18-24">18 - 24</option>
            <option value="25-34">25 - 34</option>
            <option value="35-44">35 - 44</option>
            <option value="45+">45+</option>
          </select>

          <select
            name="sellsOnline"
            onChange={handleChange}
            value={form.sellsOnline}
            required
          >
            <option value="">Você já vende online?</option>
            <option value="never">Nunca vendi</option>
            <option value="starting">Estou começando</option>
            <option value="already">Já vendo online</option>
          </select>

          <select
            name="businessType"
            onChange={handleChange}
            value={form.businessType}
            required
          >
            <option value="">Tipo de negócio</option>
            <option value="physical">Loja física</option>
            <option value="dropshipping">Dropshipping</option>
            <option value="affiliate">Afiliado</option>
            <option value="beginner">Quero começar do zero</option>
          </select>

          <select
            name="monthlyRevenue"
            onChange={handleChange}
            value={form.monthlyRevenue}
          >
            <option value="">Faturamento mensal</option>
            <option value="0">Ainda não vendo</option>
            <option value="até 2000">Até R$2 mil</option>
            <option value="2 mil a 10 mil">R$2 mil a R$10 mil</option>
            <option value="10000+">Acima de R$10 mil</option>
          </select>

          <button type="submit">Garantir minha vaga</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
