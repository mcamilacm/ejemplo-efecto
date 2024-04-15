import React, { useState } from 'react';

const Searcher = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Término de búsqueda:', searchTerm); // Verificar que searchTerm sea correcto
    // Llama a la función onSearch y pasa el término de búsqueda ingresado por el usuario
    onSearch(searchTerm);
  };

  return (
    <form className='form_container' onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Find Your City"
      />
        <button type="submit">
     Search
    </button>
    </form>
  );
};

export default Searcher;