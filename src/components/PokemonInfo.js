import { Component } from 'react';
import PokemonDataView from './PokemonDataView';
import PokemonErrorView from './PokemonErrorView';
import PokemonPendingView from './PokemonPendingView';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    status: 'idle',
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      this.setState({ status: 'pending' });

      setTimeout(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
          .then(res => {
            if (res.ok) {
              return res.json();
            }

            return Promise.reject(
              new Error(`Нет покемона с именем "${this.props.pokemonName}".`),
            );
          })
          .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
          .catch(error => this.setState({ error, status: 'rejected' }));
      }, 1000);
    }
  }

  render() {
    const { status, pokemon, error } = this.state;

    switch (status) {
      case 'idle':
        return <h1>Введите имя покемона!</h1>;

      case 'pending':
        return <PokemonPendingView pokemonName={this.props.pokemonName} />;

      case 'rejected':
        return <PokemonErrorView message={error.message} />;

      case 'resolved':
        return <PokemonDataView pokemon={pokemon} />;

      default:
        return null;
    }
  }
}
