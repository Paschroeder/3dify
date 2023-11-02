import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrintableListComponent } from './printable-list/printable-list.component';
import { PrintableFormComponent } from './printable-form/printable-form.component';
import {FormsModule} from "@angular/forms";
import { FilamentFormComponent } from './filament-form/filament-form.component';
import { FilamentListComponent } from './filament-list/filament-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PrintableListComponent,
    PrintableFormComponent,
    FilamentFormComponent,
    FilamentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
