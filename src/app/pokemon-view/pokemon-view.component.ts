import { Component } from '@angular/core';
import { PokemonsService } from '../services/pokemons.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.css']
})
export class PokemonViewComponent {
  pokemons:any=[];
  pokemonSpecies:any=[];
  constructor(private pokemonService:PokemonsService,private activatedRoute:ActivatedRoute){}

  ngOnInit():void{
    this.getPokemonSpecies();
    this.getPokemonDataById();
  }

  getPokemonDataById(){
    this.activatedRoute.paramMap.subscribe(param=>{
      let id=param.get("id")??0;
      this.pokemonService.getPokemons(+id).subscribe(data=>{
          this.pokemons=data;
      })

    })
  }

  getPokemonSpecies(){
    this.activatedRoute.paramMap.subscribe(param=>{
      let id=param.get("id")??0;
      this.pokemonService.getPokemonsSpecies(+id).subscribe(data=>{
          this.pokemonSpecies=data;
      })

    })
  }
}
