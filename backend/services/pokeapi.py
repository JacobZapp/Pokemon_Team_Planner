import httpx


POKEAPI_BASE_URL = "https://pokeapi.co/api/v2"

# Name is expected to be a String, and the function will return a dictionary with the Pokemon's id, name, sprite URL, and types.
def get_pokemon(name: str):
    url = f"{POKEAPI_BASE_URL}/pokemon/{name.lower()}"

    response = httpx.get(url)

    response.raise_for_status()

    data = response.json()

    return {
        "id": data["id"],
        "name": data["name"],
        "sprite": data["sprites"]["front_default"],
        "types": [
            type_info["type"]["name"]
            for type_info in data["types"]
        ],
    }