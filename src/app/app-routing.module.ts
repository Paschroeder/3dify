import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrintableListComponent} from "./printable-list/printable-list.component";

const routes: Routes = [
  {path:"", component: PrintableListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
