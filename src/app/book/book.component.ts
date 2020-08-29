import { Component, OnInit } from '@angular/core';
import { BookService} from '../servicio/book.service';
import {FormControl} from '@angular/forms';
import {  Book } from '../servicio/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  nombre: FormControl = new FormControl('')
  edicion: FormControl = new FormControl('')
  books:  Book[] = []
  id = ''

  constructor(public _bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks(){
    this._bookService.getBooks().subscribe( response => {
      return  this.books = response   
    })
  }

  addBook():void {
    let nombre = this.nombre.value;
    let edicion = this.edicion.value;
   if(this.id === ''){
      this._bookService.addBook(nombre, edicion).subscribe(() => { 
        this.getBooks()
        this.nombre.setValue("")
        this.edicion.setValue("") })
   } else{
    this._bookService.updateBook(this.id,nombre, edicion)
       .subscribe(() => { 
        this.getBooks()
        this.id=''
        this.nombre.setValue("")
        this.edicion.setValue("") })
   }
}

deleteBook(id:string):void {
  this._bookService.deleteBook(id).subscribe( res => {
    console.log(res)
    this.getBooks()  
  });
}

getBook(id:string):void {
this._bookService.getBook(id).subscribe(response => {
   console.log(response)
   this.nombre.setValue(response.nombre)
   this.edicion.setValue(response.edicion)
   this.id = response.id
})
}

}