import {Component, OnInit} from '@angular/core';
import {Printable} from "../../models/printable.model";
import {Filament} from "../../models/filament.model";

@Component({
  selector: 'app-filament-list',
  templateUrl: './filament-list.component.html',
  styleUrls: ['./filament-list.component.css']
})
export class FilamentListComponent implements OnInit {

  newManufacturer: string = "";
  newMaterial: string = "";
  filaments: Filament[] = [];

  ngOnInit(): void {
    let savedFilaments = localStorage.getItem('filaments');

    this.filaments = savedFilaments ? JSON.parse(savedFilaments) : [];
  }

  addFilament() {
    if (this.newManufacturer.trim().length && this.newMaterial) {
      // @ts-ignore
      let newFilament: Filament = {
        id: Date.now(),
        manufacturer: this.newManufacturer,
        material: this.newMaterial
      };
      this.filaments.push(newFilament);

      this.newManufacturer = "";
      this.newMaterial = "";

      localStorage.setItem("filaments", JSON.stringify(this.filaments));
    }
  }

}
