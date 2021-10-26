import { Injectable} from '@angular/core'
import { Personaje } from '../interfaces/dbz.interface';
export class DbzService{

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 12000
        },
        {
          nombre: 'Trunks',
          poder: 10000
        }
      ];

      get personajes(): Personaje[]{
          return [...this._personajes];
      }
    constructor(){
        console.log('servicio inicializado');
    }
    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }
}