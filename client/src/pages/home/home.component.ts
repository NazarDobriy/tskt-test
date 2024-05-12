import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { PostApiService } from 'src/core/providers/post-api.service';

import { IPost } from 'src/types/post.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  posts: IPost[] = [];
  allTags: string[] = [];
  isLoading = true;
  private destroy$ = new Subject<void>();

  constructor(private postApiService: PostApiService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  handlePostsByTags(tags: string[]): void {
    this.isLoading = true;

    if (tags.length) {
      this.postApiService
        .getPostsByTags(tags)
        .pipe(takeUntil(this.destroy$))
        .subscribe((posts: IPost[]) => {
          this.posts = posts;
          this.isLoading = false;
        });
      return;
    }

    this.fetchPosts();
  }

  private fetchPosts(): void {
    this.postApiService
      .getPosts()
      .pipe(takeUntil(this.destroy$))
      .subscribe((posts: IPost[]) => {
        this.posts = posts;
        this.isLoading = false;
        this.extractTags();
      });
  }

  private extractTags(): void {
    const uniqueTags = new Set<string>();

    this.posts.forEach((post) => {
      post.tags.forEach((tag) => uniqueTags.add(tag));
    });

    this.allTags = Array.from(uniqueTags).sort();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
