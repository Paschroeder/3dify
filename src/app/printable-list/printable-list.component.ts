import {Component, OnInit} from '@angular/core';
import { Printable } from "../models/printable.model";

@Component({
  selector: 'app-printable-list',
  templateUrl: './printable-list.component.html',
  styleUrls: ['./printable-list.component.css']
})
export class PrintableListComponent implements OnInit {

  newPrintableName: string = "";
  newPrintStart: Date = new Date();
  printables: Printable[] = [];

  ngOnInit(): void {
    let savedPrintables = localStorage.getItem('printables');

    this.printables = savedPrintables ? JSON.parse(savedPrintables) : [];
  }

  addPrintable() {
    if (this.newPrintableName.trim().length && this.newPrintStart) {
      // @ts-ignore
      let newPrintable: Printable = {
        id: Date.now(),
        name: this.newPrintableName,
        printStart: this.newPrintStart
      };
      this.printables.push(newPrintable);

      this.newPrintableName = "";
      this.newPrintStart = new Date();

      localStorage.setItem("printables", JSON.stringify(this.printables));
    }
  }

  deletePrintable(index: number) {
    this.printables.splice(index, 1);
    localStorage.setItem("appointments", JSON.stringify(this.printables));
  }

}
