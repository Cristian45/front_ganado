import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalsService } from "../../services/animals.service";
import { Animals } from 'src/app/models/animalModel';

@Component({
  selector: 'app-add-animlas',
  templateUrl: './add-animlas.component.html',
  styleUrls: ['./add-animlas.component.css']
})
export class AddAnimlasComponent implements OnInit {

  animal: Animals = {
    id:0,
    nombre:'',
    tipo:0,
    ubicacion:0
  }
;

  constructor(private animalservice: AnimalsService, private router: Router) { }

  ngOnInit() {
  }

  saveAnimal() {

    this.animalservice.saveAnimal(this.animal).subscribe(
      res => {

        this.router.navigate(['/animals'])

      },
      err => console.error(err)
    )

  }

}
