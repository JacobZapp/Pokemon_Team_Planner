import PokemonCard from './pokemoncard'
import type { PokemonSummary } from '../types/pokemonsummary'

type PokemonGridProps = {
  pokemonList: PokemonSummary[]
}

function PokemonGrid({ pokemonList }: PokemonGridProps) {
  return (
    <section>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
        />
      ))}
    </section>
  )
}

export default PokemonGrid