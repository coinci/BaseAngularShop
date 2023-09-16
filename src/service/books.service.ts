import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../book-state/books.model';

@Injectable({ providedIn: 'root' })
export class GoogleBooksService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Array<Book>> {
    // return this.http
    //   .get<{ items: Book[] }>(
    //     'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
    //   )
    //   .pipe(map((books) => books.items || []));

    const books: Book[] = [];
    const b1:Book = {id:'b1',volumeInfo: {title:'b1_title', authors:['b1_author']}};
    books.push(b1);

    const b2:Book = {id:'b2',volumeInfo: {title:'b2_title', authors:['b2_author']}};
    books.push(b2);

    return of(books);
  }
}