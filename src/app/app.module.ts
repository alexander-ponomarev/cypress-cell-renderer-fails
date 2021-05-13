import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AgGridModule} from "@ag-grid-community/angular";
import {SampleCellRendererComponent} from "./sample-cell-renderer.component";

@NgModule({
  declarations: [
    AppComponent,
    SampleCellRendererComponent
  ],
    imports: [
        BrowserModule,
      AgGridModule.withComponents([
        SampleCellRendererComponent
      ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
