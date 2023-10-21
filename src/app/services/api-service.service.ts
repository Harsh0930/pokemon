import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiURL="https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  constructor(private http:HttpClient) { }

  sendDataToServer(apiData:any){
    return this.http.post(`${this.apiURL}/saveData`,apiData);
  }
}
