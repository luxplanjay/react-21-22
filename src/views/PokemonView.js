import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import PokemonForm from '../components/Pokemon/Form.js';
import PokemonInfo from '../components/Pokemon/Info.js';

export default function PokemonView() {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <>
      <PokemonForm onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
      <ToastContainer autoClose={3000} />
    </>
  );
}
