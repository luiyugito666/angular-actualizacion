import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import { v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

   public characters: Character[] = [{
    id:uuid(),
     name: 'krilin',
     power: 500,
   
  },
     {
      id:uuid(),
      name: 'goku',
      power: 9500,
      
    },
     {
      id:uuid(),
      name: 'Vegueta',
      power:7500
    }];
  addCharacter(character: Character): void { 
    const newCharacter:Character= {...character,id:uuid()}
    


   this.characters.push(newCharacter);

  }

 /*  onDeleteCharacter(index: number) {
    this.characters.splice(index,1);
  } */

  deleteCharacterById(id: string) {
        this.characters = this.characters.filter(character => character.id !== id);
  }
 }