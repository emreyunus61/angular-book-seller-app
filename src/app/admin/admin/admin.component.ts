import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  implements OnInit{

  bookList: Array<Book> =[];

  constructor(private bookService: BookService){}


  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(data =>{ 
        this.bookList=data;
    });
   
  }

}
