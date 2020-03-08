import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Animals } from "../models/animalModel";

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  API_URI = 'http://localhost:5000'

  constructor(private http: HttpClient) { }

  getAnimals():Observable<any> {

    return this.http.get(`${this.API_URI}/listar`);
  }

  saveAnimal(animal:Animals):Observable<any> {

    console.log(animal);
    
    
    return this.http.post(`${this.API_URI}/insertar`, animal)
  }


}
