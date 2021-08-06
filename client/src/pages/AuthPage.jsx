import React, { useState, useEffect, useContext } from "react";
import styles from "../style/Button.module.css";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../context/AuthContext";
export const AuthPage = () => {
  const auth = useContext(AuthContext);
  const { loading, error, request, clearError } = useHttp();
  const message = useMessage();
  const [form, setForm] = useState({
    email: "",
    pass: "",
  });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
      message(data.message);
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      auth.login(data.token, data.userId);
    } catch (e) {}
  };

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Сократи ссылку</h1>
        <div className="card red darken-1">
          <div className="card-content white-text">
            <span className="card-title">Авторизация</span>
            <div>
              <div className="input-field">
                <input
                  name="email"
                  value={form.email}
                  placeholder="Введите email"
                  id="email"
                  onChange={changeHandler}
                  type="text"
                  className={`validate ${styles.inputWhite}`}
                />
                <label className="white-text" htmlFor="login">
                  Email
                </label>
              </div>
              <div className="input-field">
                <input
                  placeholder="Введите пароль"
                  id="pass"
                  onChange={changeHandler}
                  name="pass"
                  type="text"
                  value={form.pass}
                  className={`validate ${styles.inputWhite}`}
                />
                <label className="white-text" htmlFor="pass">
                  Pass
                </label>
              </div>
            </div>
          </div>

          <div className="card-action">
            <button
              onClick={loginHandler}
              className={`btn light-blue darken-4 ${styles.mr1}`}
              disabled={loading}
            >
              Войти
            </button>
            <button
              onClick={registerHandler}
              className="btn orange darken-2"
              disabled={loading}
            >
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
