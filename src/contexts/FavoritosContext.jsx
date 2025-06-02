import { createContext, useContext, useState } from "react";

const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  const adicionarFavorito = (item) => {
    // Verifica se já existe o item pelo cep antes de adicionar
    if (!favoritos.some((f) => f.cep === item.cep)) {
      setFavoritos([...favoritos, item]);
    }
  };

  const removerFavorito = (cep) => {
    setFavoritos(favoritos.filter((item) => item.cep !== cep));
  };

  return (
    <FavoritosContext.Provider
      value={{ favoritos, adicionarFavorito, removerFavorito }}
    >
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavoritos = () => useContext(FavoritosContext);
