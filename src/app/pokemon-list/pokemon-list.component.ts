import { Component } from '@angular/core';
import { PokemonsService } from '../services/pokemons.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';
import { response } from 'express';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  pokemonData:any[]=[];
  page=0;
  totalPokemon?:number;
  limit:number=8;
constructor(private pokemonService:PokemonsService, private router:Router,private apiService:ApiServiceService){}


ngOnInit():void{
this.getPokemons();
}
getPokemons(){
  this.pokemonService.getAllPokemonsData(this.limit,this.page).subscribe((response:any)=>{
    response.results.forEach((result:any) => {
      this.totalPokemon=response.count;
      this.pokemonService.getMoreData(result.name)
      .subscribe((res:any)=>{
        this.pokemonData.push(res);
        console.log(this.pokemonData);
      })
    });
  })
}

sendData(){
  const apiData={};

  this.apiService.sendDataToServer(apiData).subscribe(response=>{
    console.log("API Data Saved",response);
  },error=>{
    console.error("Error",error);
  })
}

loadMore(){

 this.page=this.page+8;
 this.getPokemons();
}
}
