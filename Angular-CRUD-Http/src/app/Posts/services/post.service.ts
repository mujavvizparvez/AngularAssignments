import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICategory } from 'src/app/Categories/models/ICategory';
import { IPost } from '../models/IPost';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  postServiceEvent = new EventEmitter<boolean>();
  emitPostService(message: boolean) {
    this.postServiceEvent.emit(message);
  }
  baseUrl = `https://httpcrud-20185-default-rtdb.firebaseio.com/`;
  constructor(private http: HttpClient) {}
  // getPosts(): Observable<IPost[]> {
  //   return this.http.get<IPost[]>(`${this.categoryUrl}posts.json`);
  // }
  getPosts(): Observable<IPost[]> {
    return this.http
      .get<{ [id: string]: IPost }[]>(`${this.baseUrl}posts.json`)
      .pipe(
        map((categories) => {
          let formattedCategories: IPost[] = [];
          for (let id in categories) {
            formattedCategories.push({
              id,
              ...categories[id],
            } as unknown as IPost);
          }
          return formattedCategories;
        })
      );
  }
  addPost(post: IPost): Observable<{ name: string }> {
    return this.http.post<{ name: string }>(`${this.baseUrl}posts.json`, post);
  }

  getPostById(id: string): Observable<IPost> {
    return this.http.get<IPost>(`${this.baseUrl}posts/${id}.json`);
  }
  updatePost(post: IPost, id: string) {
    return this.http.put(`${this.baseUrl}posts/${id}.json`, post);
  }
  deletePost(id: string) {
    return this.http.delete(`${this.baseUrl}posts/${id}.json`);
  }
}
