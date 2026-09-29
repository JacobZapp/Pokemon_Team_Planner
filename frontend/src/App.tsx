import { useEffect, useState } from 'react'
import './App.css'
import PokemonCard from './components/pokemoncard'
import type { PokemonSummary } from './types/pokemonsummary'

function App() {
  const [pokemon, setPokemon] = useState<PokemonSummary | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('http://127.0.0.1:8000/pokemon/charmander')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load Pokémon')
        }

        return response.json()
      })
      .then((data: PokemonSummary) => {
        setPokemon(data)
      })
      .catch(() => {
        setError('Could not load Charmander')
      })
  }, [])

  return (
    <main>
      <h1>Pokémon Team Planner</h1>

      {error && <p>{error}</p>}

      {!pokemon && !error && <p>Loading Charmander...</p>}

      {pokemon && <PokemonCard pokemon={pokemon} />}
    </main>
  )
}

export default App