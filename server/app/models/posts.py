from typing import List
from pydantic import BaseModel


class Post(BaseModel):
    id: int
    title: str
    summary: str
    tags: List[str]


class TagFilterRequest(BaseModel):
    tags: List[str]
