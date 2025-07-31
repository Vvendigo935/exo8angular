import { Component, OnDestroy, OnInit } from '@angular/core';
import { PokeService } from '../../utils/services/poke-service';
import { PokemonType } from '../../utils/types/pokemon.type';
import { error } from 'node:console';


@Component({
  selector: 'app-root',
  templateUrl: './pokemon.html'
})
export class AppComponent implements OnInit {
  pokemon: any;
  currentId: number = 1;
  maxId: number = 150;

  constructor(private pokeService: PokeService) {}

  ngOnInit() {
    this.loadPokemon(this.currentId);
  }

  loadPokemon(id: number) {
    if (id < 1 || id > this.maxId) return;
    this.pokeService.getPokemon(id).subscribe({
      next: (data) => {
        this.pokemon = data;
        this.currentId = data.id;
      },
      error: (err) => {
        console.error("Erreur API :", err);
        this.pokemon = null;
      }
    });
  }

  nextPokemon() {
    if (this.currentId < this.maxId) {
      this.loadPokemon(this.currentId + 1);
    }
  }

  prevPokemon() {
    if (this.currentId > 1) {
      this.loadPokemon(this.currentId - 1);
    }
  }

  searchPokemon(id: number) {
    this.loadPokemon(id);
  }
}
