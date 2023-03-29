import { Component } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';


declare var $: any;

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  book: Book =new Book();
  errorMessage: String = "";

  constructor(private bookService : BookService){

    this.bookService.saveBook(this.book).subscribe(data => {
      ///
    }, err =>{
      this.errorMessage = "Unexpected error occured.";
      console.log(err);

    });
    
  }

  showBookModal() {
    console.log("Adammehmet")
    $('#bookModal').modal('show');
  }

}
