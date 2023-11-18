import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../modules/fetch/index';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const result = await loginUser(email, password);
      console.log(result);
      // Lakukan sesuatu setelah login berhasil, misalnya menyimpan token atau meredirect ke halaman lain
      navigate.push('/');
    } catch (error) {
      console.error('Login error:', error.message);
      // Handle error, misalnya menampilkan pesan kesalahan
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
