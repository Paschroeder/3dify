import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrintableListComponent} from "./printable-list/printable-list.component";
import {FilamentListComponent} from "./filament/filament-list/filament-list.component";

const routes: Routes = [
  {path:"", component: PrintableListComponent},
  {path:"filament", component: FilamentListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
