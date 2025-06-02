import React from 'react';
import Navbar from './components/Navbar';  // importe seu navbar aqui
import AppRoutes from '../src/routes/AppRoutes';      // seu componente que tem as rotas

function App() {
  return (
    <>
      <Navbar />       {/* navbar sempre visível */}
      <main className="container mx-auto p-4 mt-16">  {/* margem top para afastar do Navbar */}
        <AppRoutes />    {/* renderiza as rotas */}
      </main>
    </>
  );
}

export default App;
