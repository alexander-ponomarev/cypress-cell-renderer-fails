import { Component } from '@angular/core';
import { ICellRendererAngularComp } from '@ag-grid-community/angular';
import { ICellRendererParams } from '@ag-grid-community/core';


@Component({
  selector: 'ui-table-tooltip-cell',
  template: `
    <div class="sample-cell-rerender">
      <b>{{ value }}</b>
    </div>
  `
})
export class SampleCellRendererComponent implements ICellRendererAngularComp {
  public value: unknown;

  agInit(params: any): void {
    console.log('cell renderer agInit');
    this.value = params.value;
  }

  refresh(params: ICellRendererParams): boolean {
    console.log('cell renderer refresh');
    this.value = params.value;
    return true;
  }
}
