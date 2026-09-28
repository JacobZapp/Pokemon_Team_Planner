from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from services.pokeapi import get_pokemon

# create web app instance
app = FastAPI()

# if someone visits the root of the API, return a message
@app.get("/")
def read_root():
    return {"message": "Pokemon Team Planner API"}

@app.get("/pokemon/{name}")
def read_pokemon(name: str):
    return get_pokemon(name)