import type { PokemonSummary } from "../types/pokemonsummary" // pokemoncard talks to pokemonsummary

type PokemonCardProps = {
  pokemon: PokemonSummary
}

function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <article>
      <img src={pokemon.sprite} alt={pokemon.name} />

      <h2>{pokemon.name}</h2>

      <div>
        {pokemon.types.map((type) => (
          <span key={type}>{type}</span>
        ))}
      </div>
    </article>
  )
}

export default PokemonCard