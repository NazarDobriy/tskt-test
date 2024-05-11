from typing import List
from http.client import HTTPException
from fastapi import APIRouter
from app.models import Post, TagFilterRequest
from app.utils import load_posts_data

router = APIRouter(prefix="/posts")
posts_data = load_posts_data('./app/posts.json')


@router.get("/", response_model=List[Post])
async def read_posts():
    return posts_data


@router.get("/{post_id}", response_model=Post)
async def read_post_by_id(post_id: int):
    for post in posts_data:
        if post["id"] == post_id:
            return post
    raise HTTPException(status_code=404, detail="Post not found")


@router.get("/filter/by/tags", response_model=List[Post])
async def search_posts_by_tag(request: TagFilterRequest):
    tags = request.tags

    if not tags:
        raise HTTPException(status_code=400, detail="Tags aren't provided in the request body")

    matching_posts_dict = {}

    for tag in tags:
        for post in posts_data:
            if tag in post["tags"]:
                matching_posts_dict[post["id"]] = post

    return list(matching_posts_dict.values())
