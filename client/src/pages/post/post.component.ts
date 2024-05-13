import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { PostApiService } from 'src/core/providers/post-api.service';
import { IPost } from 'src/types/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit, OnDestroy {
  post: IPost | null = null;
  isLoading = true;
  private postId = 0;
  private destroy$ = new Subject<void>();

  constructor(
    private postApiService: PostApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.postId = parseInt(this.activatedRoute.snapshot.params['id']);
    this.fetchPost();
  }

  private fetchPost(): void {
    this.postApiService
      .getPostById(this.postId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((post: IPost) => {
        this.post = post;
        this.isLoading = false;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
