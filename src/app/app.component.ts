import {Component, OnInit} from '@angular/core';
import {ColDef, GridOptions, Module} from "@ag-grid-community/core";
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import {SampleCellRendererComponent} from "./sample-cell-renderer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cypress-cell-renderer-fails';
  public rows: any[] = [];
  public columnDefs: ColDef[] = [];
  public columnDefs2: ColDef[] = [];

  public frameworkComponents = {
    sampleCellRendererComponent: SampleCellRendererComponent
  };
  public gridOptions: GridOptions = {
    suppressColumnVirtualisation: true,
  }

  modules: Module[] = [ClientSideRowModelModule];

  ngOnInit() {
    this.columnDefs = [
      {
        colId: 'firstColumn',
        field: 'firstColumn',
        headerName: 'First column',
      },
      {
        colId: 'secondColumn',
        field: 'secondColumn',
        headerName: 'Second column'
      }
    ];

    this.columnDefs2 = [
      {
        colId: 'firstColumn',
        field: 'firstColumn',
        headerName: 'First column',
        cellRenderer: 'sampleCellRendererComponent'
      },
      {
        colId: 'secondColumn',
        field: 'secondColumn',
        headerName: 'Second column',
        cellRenderer: 'sampleCellRendererComponent'
      }
    ];

    this.rows = [
      {
        firstColumn: 'TEST VALUE FOR FIRST COLUMN',
        secondColumn: 'TEST VALUE FOR SECOND COLUMN'
      }
    ]

  }
}
