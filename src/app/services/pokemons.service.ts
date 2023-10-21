import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http:HttpClient) { }


  //fetching the details of Pokemons..
  getAllPokemonsData(limit:number,offset:number){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  }

  getMoreData(name?:string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  getPokemons(id?:number){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
  getPokemonsSpecies(id?:number){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  }
}
