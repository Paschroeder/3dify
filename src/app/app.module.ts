import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrintableListComponent } from './printable-list/printable-list.component';
import { PrintableFormComponent } from './printable-form/printable-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PrintableListComponent,
    PrintableFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
