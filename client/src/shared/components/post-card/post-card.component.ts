import { Component, Input } from '@angular/core';

import { IPost } from 'src/types/post.interface';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  @Input() post: IPost | null = null;
}
