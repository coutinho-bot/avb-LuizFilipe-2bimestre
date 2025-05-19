import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [cep, setCep] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Limpa espaços e só permite números (você pode melhorar a validação)
    const cepLimpo = cep.replace(/\D/g, '');

    if (cepLimpo.length !== 8) {
      alert('Por favor, digite um CEP válido com 8 números');
      return;
    }

    // Redireciona para página de detalhes do CEP
    navigate(`/detalhes/${cepLimpo}`);
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-8 text-center">Consulta de CEP</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          placeholder="Digite o CEP (apenas números)"
          className="border border-gray-400 rounded px-3 py-2 text-lg"
          maxLength={9}
        />
      </form>
    </div>
  );
};

export default Home;
