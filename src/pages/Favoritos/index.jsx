import { useFavoritos } from '../../contexts/FavoritosContext';
import { Link } from 'react-router-dom';

const Favoritos = () => {
  const { favoritos, removerFavorito } = useFavoritos();

  if (favoritos.length === 0) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-xl font-bold mb-2">Favoritos</h2>
        <p className="text-gray-600">Nenhum CEP foi favoritado ainda.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Meus CEPs Favoritos</h2>
      <ul className="space-y-4">
        {favoritos.map((item) => (
          <li
            key={item.cep}
            className="border p-4 rounded shadow flex flex-col items-center"
          >
            <Link
              to={`/detalhes/${item.cep}`}
              className="text-blue-600 font-medium hover:underline text-lg mb-2"
            >
              {item.cep}
            </Link>

            <button
              onClick={() => removerFavorito(item.cep)}
              className="text-red-600 hover:text-red-800 text-xl"
              aria-label="Remover dos favoritos"
              title="Remover dos favoritos"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              ⭐
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favoritos;
