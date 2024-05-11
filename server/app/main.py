from fastapi import FastAPI
from app import posts_router

app = FastAPI()
app.include_router(posts_router)
