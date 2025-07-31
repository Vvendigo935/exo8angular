import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonType } from '../types/pokemon.type';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private baseUrl = "https://pokeapi.co/api/v2/"

  constructor(private http: HttpClient){}

  getPokemons(): Observable<PokemonType[]>{
    return this.http.get<PokemonType[]>(this.baseUrl)
  }

  

}
