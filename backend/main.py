from fastapi import FastAPI

# create web app instance
app = FastAPI()

# if someone visits the root of the API, return a message
@app.get("/")
def read_root():
    return {"message": "Pokemon Team Planner API"}