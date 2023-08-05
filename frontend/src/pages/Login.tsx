import React from 'react';
import styles from './Login.styles';

const Login = () => {
  return (
    <div className="App" style={styles.app}>
      <div className="login-container" style={styles.loginContainer}>
        <h2 style={styles.loginHeader}>Página de Login</h2>
        <form className="login-form" style={styles.loginForm}>
          <label htmlFor="email" style={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu email"
            style={styles.input}
          />

          <label htmlFor="password" style={styles.label}>
            Senha
          </label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
