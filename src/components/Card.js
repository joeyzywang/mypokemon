function Card({ cardRes: pokemon }) {
  // if(!pokemon)
  // return;

  var hp = pokemon.stats[0].base_stat;
  var attack = pokemon.stats[1].base_stat;
  var defense = pokemon.stats[2].base_stat;
  var speed = pokemon.stats[5].base_stat;
  const stats = `HP: ${hp} Attack: ${attack} Defense: ${defense} Speed: ${speed}`;

  const pokemonId = `ID# ${pokemon.id}`;
  const imageUrl = pokemon.sprites.other.dream_world.front_default;
  const pokemonName =
    pokemon.species.name.charAt(0).toUpperCase() +
    pokemon.species.name.slice(1);

  const pokemonType = `Element Type: ${
    pokemon.types[0].type.name.charAt(0).toUpperCase() +
    pokemon.types[0].type.name.slice(1)
  }`;

  const height = pokemon.height * 3.937008;
  const weight = pokemon.weight * 0.2204623;
  const heightWeight = `Height: ${height.toFixed(1)}in Weight: ${weight.toFixed(
    2
  )}lbs`;

  const ability = `Special Ability: ${
    pokemon.abilities[0].ability.name.charAt(0).toUpperCase() +
    pokemon.abilities[0].ability.name.slice(1)
  }`;
  return (
    <div id="card">
      <p className="ID">
        <span>{pokemonId}</span>
      </p>
      <img src={imageUrl} className="image" alt="This is a pokemon img." />
      <h2 className="name">{pokemonName}</h2>
      <div className="types">{pokemonType}</div>
      <div className="height-weight">{heightWeight}</div>
      <div className="abilities">{ability}</div>
      <div className="stats">{stats}</div>
    </div>
  );
}

export default Card;
