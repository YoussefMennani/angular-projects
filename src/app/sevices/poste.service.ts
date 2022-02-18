import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PosteService {

  url ="http://localhost:8000/postes";
  constructor(private http: HttpClient) { }

  getPoste(){
    return this.http.get(this.url);
  }
}
