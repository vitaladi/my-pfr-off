import React, { useState } from 'react';

const PersonalSpace = () => {
  // Utilise le hook useState pour gérer l'état des informations de l'utilisateur
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    instagram:'',
    id:'',
    city:'',
  });

  // Gère les changements des champs de formulaire
  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  // Soumet le formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectue les actions nécessaires pour enregistrer les informations de l'utilisateur
    // par exemple, faire une requête à une API, enregistrer dans une base de données, etc.
    
    console.log('Informations de l\'utilisateur enregistrées :', userInfo);
    // Réinitialise les champs du formulaire
    setUserInfo({
      username: '',
      email: '',
        instagram:'',
        id:'',
        city:'',
    });
  };

  return (
    <div>
      <h2>Espace personnel</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom d'utilisateur:
          <input
            type="text"
            name="username"
            value={userInfo.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
          />
        </label>
        <br />
        {/* Ajoute d'autres champs de formulaire pour les autres informations de l'utilisateur */}
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
};

export default PersonalSpace;
