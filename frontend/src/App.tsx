import './App.css'
import PokemonCard from './components/pokemoncard'

function App() {
  const testPokemon = {
    id: 258,
    name: "mudkip",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",
    types: ["water"]
  }

  return (
    <main>
      <h1>Pokémon Team Planner</h1>
{/* This is used to render the pokemon card component and give it a prop named Pokemon */}
      <PokemonCard pokemon={testPokemon} /> 
    </main>
  )
}

export default App