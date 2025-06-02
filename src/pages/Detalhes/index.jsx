import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useFavoritos } from '../../contexts/FavoritosContext';

const Detalhes = () => {
  const { codigo } = useParams(); // aqui "codigo" será o CEP
  const [endereco, setEndereco] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {
    favoritos,
    adicionarFavorito,
    removerFavorito
  } = useFavoritos();

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
      <p className="text-red-600">{error}</p>
    </div>
  );

  const jaFavoritado = favoritos.some(fav => fav.cep === endereco.cep);

  const handleFavorito = () => {
    jaFavoritado
      ? removerFavorito(endereco.cep)
      : adicionarFavorito(endereco);
  };

  return (
      <div className="container mx-auto p-4 max-w-lg flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">CEP: {codigo}</h1>
        <p><strong>Logradouro:</strong> {endereco.logradouro || '—'}</p>
        <p><strong>Bairro:</strong> {endereco.bairro || '—'}</p>
        <p><strong>Cidade:</strong> {endereco.localidade || '—'}</p>
        <p><strong>Estado:</strong> {endereco.uf || '—'}</p>
        <p><strong>Complemento:</strong> {endereco.complemento || '—'}</p>


      <div className="container mx-auto p-4 max-w-lg flex justify-center">
        <button
          onClick={handleFavorito}
          className={`rounded text-black flex items-center justify-center w-12 h-12 text-3xl ${
            jaFavoritado ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'
          }`}
          aria-label={jaFavoritado ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          title={jaFavoritado ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          {jaFavoritado ? '⭐' : '💔'}
        </button>
      </div>

    </div>
  );
};

export default Detalhes;
