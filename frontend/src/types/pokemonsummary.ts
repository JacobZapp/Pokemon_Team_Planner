// Creating a type for the Pokemon summary data
export type PokemonSummary = {
  id: number
  name: string
  sprite: string // Sprite URL is a string for the image
  types: string[] // array of strings representing the types of the Pokemon
}