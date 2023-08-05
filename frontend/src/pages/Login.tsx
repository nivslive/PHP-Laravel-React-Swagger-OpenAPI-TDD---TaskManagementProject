import React, { useEffect, useState } from 'react';
import styles from './Login.styles';
import authData from '../data/Auth';
import { useSelector } from 'react-redux';

const Login = () => {
    const [email, setEmail] = useState<any>('');
    const [password, setPassword] = useState<any>('');
    const authenticated = useSelector((store: any) => store.auth.authenticated);
    
    useEffect(() => {
        if(authenticated) window.location.pathname = '/dashboard';
    }, []);

    const submit = () => {
        authData.login({email, password}).then((e: any) => {
            if(localStorage.getItem('bearer-token') === null) {
                localStorage.setItem('bearer-token', 'Bearer ' + e.json().token);
            }
        });
    };
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
            onChange={setEmail}
            placeholder="Digite seu email"
            style={styles.input}
          />

          <label htmlFor="password" style={styles.label}>
            Senha
          </label>
          <input
            type="password"
            id="password"
            onChange={setPassword}
            placeholder="Digite sua senha"
            style={styles.input}
          />

          <button onClick={submit} type="submit" style={styles.button}>
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
