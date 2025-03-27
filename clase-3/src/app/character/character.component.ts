import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character',
  imports: [],
  template: `
    <div>
      <img src="{{character.image}}" alt="imagen de rick">
      <h2>{{character.id}} - {{character.name}}</h2>
      <p>{{character.species}} - {{character.gender}}</p>
    </div>
  `,
  styles:
    `div {
  text-align: center;
  background-color: rgba(64, 224, 208, 0.39);
  padding: 20px;
  border-radius: 20px;
  }

  div img {
    width: 100%;
    border-radius: 50%;
  }`
})

export class CharacterComponent {
  @Input() character!: {
    id: string,
    name: string,
    image: string,
    species: string,
    gender: string
  }
}