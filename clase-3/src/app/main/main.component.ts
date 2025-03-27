import { Component } from '@angular/core';
import { CharacterComponent } from '../character/character.component';

@Component({
  selector: 'app-main',
  imports: [CharacterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {
  characters = [
    {
      id: "1",
      name: "Rick Sanchez",
      species: "Human",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    },
    {
      id: "2",
      name: "Morty Smith",
      species: "Human",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    }
  ]
}