import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../book-state/books.model';
import { selectBookCollection, selectBooks } from '../../book-state/books.selectors';
import { BooksActions, BooksApiActions } from '../../book-state/books.actions';
import { GoogleBooksService } from '../../service/books.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-ngrx-practice',
  templateUrl: './ngrx-practice.component.html',
  styleUrls: ['./ngrx-practice.component.scss']
})
export class NgrxPracticeComponent {
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);
 
  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }
 
  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }
 
  constructor(private booksService: GoogleBooksService, private store: Store) {}
 
  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
      );
  }

}
