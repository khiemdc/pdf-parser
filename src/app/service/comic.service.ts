import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comic } from '../all/all';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

constructor(private http: HttpClient) { }

public getComics(): Observable<Comic[]>{
  // return this.http.get<Comic[]>('http://localhost:3000/rebirth');
  return this.http.get<Comic[]>('../../src/app/shared/files.json');
}



}

