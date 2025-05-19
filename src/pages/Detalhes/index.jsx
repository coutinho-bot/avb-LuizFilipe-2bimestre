import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Detalhes = () => {
  const { codigo } = useParams();  // aqui "codigo" será o CEP
  const navigate = useNavigate();
  const [endereco, setEndereco] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (codigo) {
      setLoading(true);
      setError(null);

      axios.get(`https://viacep.com.br/ws/${codigo}/json/`)
        .then(res => {
          if (res.data.erro) {
            setError('CEP não encontrado');
            setEndereco(null);
          } else {
            setEndereco(res.data);
          }
          setLoading(false);
        })
        .catch(() => {
          setError('Erro ao buscar CEP');
          setLoading(false);
        });
    }
  }, [codigo]);

  if (loading) return <p>Carregando...</p>;

  if (error) return (
    <div className="container mx-auto p-4">
      <button onClick={() => navigate(-1)} className="mb-4 px-3 py-1 bg-gray-300 rounded hover:bg-gray-400">← Voltar</button>
      <p className="text-red-600">{error}</p>
    </div>
  );

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <button onClick={() => navigate(-1)} className="mb-4 px-3 py-1 bg-gray-300 rounded hover:bg-gray-400">← Voltar</button>

      <h1 className="text-2xl font-bold mb-4">CEP: {codigo}</h1>
      <p><strong>Logradouro:</strong> {endereco.logradouro || '—'}</p>
      <p><strong>Bairro:</strong> {endereco.bairro || '—'}</p>
      <p><strong>Cidade:</strong> {endereco.localidade || '—'}</p>
      <p><strong>Estado:</strong> {endereco.uf || '—'}</p>
      <p><strong>Complemento:</strong> {endereco.complemento || '—'}</p>
    </div>
  );
};

export default Detalhes;
