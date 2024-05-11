import json
from typing import List
from app.models import Post


def load_posts_data(file_path: str) -> List[Post]:
    with open(file_path, "r") as file:
        return json.load(file)
