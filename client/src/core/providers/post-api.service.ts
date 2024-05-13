import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IPost } from 'src/types/post.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class PostApiService {
  private url = `${environment.apiHost}/posts`;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.url);
  }

  getPostById(id: number): Observable<IPost> {
    return this.http.get<IPost>(`${this.url}/${id}`);
  }

  getPostsByTags(tags: string[]): Observable<IPost[]> {
    return this.http.post<IPost[]>(`${this.url}/filter/by/tags`, {
      tags: [...tags]
    });
  }
}
