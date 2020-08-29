import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
 URL = "http://localhost/applibrolaravel/public/libro";
   
  constructor(private _http :HttpClient) { }

getBooks(): Observable<Book[]> {
    return this._http.get<Book[]>(this.URL);
}

addBook(nombre:string, edicion:string): Observable<any>{
    let obj = new FormData()
    obj.append("nombre",nombre)
    obj.append("edicion", edicion)
    return this._http.post(this.URL, obj )
}

deleteBook(id:string):Observable<any>{
    return this._http.delete(this.URL+'/'+id)
}

getBook(id:string):Observable<Book>{
  return this._http.get<Book>(this.URL+'/'+id)
}

updateBook(id:string, nombre:string, edicion:string){
   let obj = new FormData()
   obj.append("id" ,id)
   obj.append("nombre",nombre)
   obj.append("edicion", edicion)
   return this._http.put(this.URL, obj)
}

}


