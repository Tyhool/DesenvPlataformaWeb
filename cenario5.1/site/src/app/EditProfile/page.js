// Arquivo: page.js
"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../globals.css';

export default function EditProfilePage() {
  const [nome, setName] = useState('');
  const [email, setEmail] = useState('');

  // Simula uma chamada GET para preencher os campos com os dados do usuário
  useEffect(() => {
    // Substitua '/api/profile' pelo URL da sua API
    axios.get(`http://localhost:3001/users?email=${email}`)
      .then(response => {
        setName(response.data.nome);
        setEmail(response.data.email);
      })
      .catch(error => {
        console.error('Erro ao carregar o perfil', error);
      });
  }, []);

  const handlePhotoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setPhoto(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Faz uma chamada PUT para atualizar o perfil do usuário
    // Substitua '/api/profile' pelo URL da sua API
    axios.put(`http://localhost:3001/users?email=${email}`, {
      nome,
      email,
    })
    .then(response => {
      alert('Perfil atualizado com sucesso');
      // Limpa os campos do formulário após o usuário clicar em "OK" no alerta
      setName('');
      setEmail('');

    })
    .catch(error => {
      console.error('Erro ao atualizar o perfil', error);
    });
  };

  return (
    <div className="EditarProfilePage">
      <h1>Editar Perfil</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <input type="submit" value="Salvar" />
      </form>
    </div>
  );
}