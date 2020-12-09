export default function PokemonDataView({ pokemon: { sprites, name, stats } }) {
  return (
    <div>
      <img
        src={sprites.other['official-artwork'].front_default}
        width="240"
        height="100"
        alt={name}
      />
      <h2>{name}</h2>
      <ul>
        {stats.map(entry => (
          <li key={entry.stat.name}>
            {entry.stat.name}: {entry.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}
