import React, { useState } from "react";
import { preSignUp, signUp, preSignIn, signIn } from "../../api/auth";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Form = () => {
  const [auth, setAuth] = useState({ email: "" });
  const [reg, setReg] = useState({ firstName: "", lastName: "", email: "" });
  const [patronymic, setPatronymic] = useState({ patronymic: "" });

  const handleAuthChange = (e) => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
  };

  const handleRegChange = (e) => {
    setReg({ ...reg, [e.target.name]: e.target.value });
  };

  const handlePatronymicChange = (e) => {
    setPatronymic({ ...patronymic, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Header />
      <div>
        <h2>Авторизация</h2>
        <form onSubmit={(e) => { preSignIn(auth.email); e.preventDefault() }}>
          <input type="email" name="email" value={auth.email} onChange={handleAuthChange} placeholder="Email" required />
          <button type="submit">Войти</button>
        </form>
        <form onSubmit={(e) => { signIn(auth.email, patronymic.patronymic); e.preventDefault() }}>
          <input type="text" name="patronymic" value={patronymic.patronymic} onChange={handlePatronymicChange} placeholder="Код подтверждения" required />
          <button type="submit">Подтвердить</button>
        </form>
      </div>
      <div>
        <h2>Регистрация</h2>
        <form onSubmit={(e) => { preSignUp(reg.email); e.preventDefault() }}>
          <input type="text" name="firstName" value={reg.firstName} onChange={handleRegChange} placeholder="Имя" required />
          <input type="text" name="lastName" value={reg.lastName} onChange={handleRegChange} placeholder="Фамилия" required />
          <input type="email" name="email" value={reg.email} onChange={handleRegChange} placeholder="Email" required />
          <button type="submit">Зарегистрироваться</button>
        </form>
        <form onSubmit={(e) => { signUp(reg.firstName, reg.lastName, reg.email, patronymic.patronymic); e.preventDefault() }}>
          <input type="text" name="patronymic" value={patronymic.patronymic} onChange={handlePatronymicChange} placeholder="Код подтверждения" required />
          <button type="submit">Подтвердить</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Form;
