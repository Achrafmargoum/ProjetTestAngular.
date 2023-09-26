import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  private baseUrl = 'http://localhost:3000'; // Adjust the base URL as needed

  constructor(private http: HttpClient) {}

  createNewHero(hero: any): Observable<any> {
    const url = `${this.baseUrl}/hero/create`;
    return this.http.post(url, hero);
  };


  getAllHeroes(): Observable<any[]> {
    const url = `${this.baseUrl}/hero/all`;
    return this.http.get<any[]>(url);
  };




  deleteHero(id: any): Observable<any> {
    const url = `${this.baseUrl}/hero/supprimer/${id}`; // Add the ID to the URL
    return this.http.delete<any>(url);
  }

  getHeroById(id: any): Observable<any> {
    const url = `${this.baseUrl}/hero/getbyid/${id}`;
    return this.http.get<any>(url);
  }


  modifierHero(id: any, hero: any): Observable<any> {
    const url = `${this.baseUrl}/hero/update/${id}`; // Use template literals
    return this.http.put(url, hero);
  }

}
