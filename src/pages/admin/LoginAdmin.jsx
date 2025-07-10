import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginAdmin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock check
    if (email === 'admin@cyna.com' && password === 'admin123') {
      localStorage.setItem('isAdmin', 'true'); // sauvegarder le statut admin
      navigate('/admin/dashboard');
    } else {
      alert('Identifiants incorrects');
    }
  };

  return (
    <div className="login-admin">
      <h2>Connexion Admin</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Mot de passe" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default LoginAdmin;
