from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from services.pokeapi import get_pokemon


app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# if someone visits the root of the API, return a message
@app.get("/")
def read_root():
    return {"message": "Pokemon Team Planner API"}

@app.get("/pokemon/{name}")
def read_pokemon(name: str):
    return get_pokemon(name)