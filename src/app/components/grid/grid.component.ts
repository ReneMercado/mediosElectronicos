import { Component, Input, Output, ViewChild, OnInit, EventEmitter, ElementRef } from '@angular/core';
import { AgGridNg2 } from 'ag-grid-angular';
import * as moment from 'moment';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styles: []
})
export class GridComponent implements OnInit {

  @ViewChild('agGrid') agGrid: AgGridNg2;

  // localeText = {
  //   // for filter panel
  //   page: 'Pagina',
  //   more: 'mas',
  //   to: 'a',
  //   of: 'de',
  //   next: 'Siguiente',
  //   last: 'Ultimo',
  //   first: 'Primero',
  //   previous: 'Anterior',
  //   loadingOoo: 'Cargando...',

  //   // for set filter
  //   selectAll: 'Seleccionar Todo',
  //   searchOoo: 'Buscar...',
  //   blanks: 'Blanco',

  //   // for number filter and text filter
  //   filterOoo: 'Filtrar...',
  //   applyFilter: 'Aplicar...',

  //   // for number filter
  //   equals: 'Igual a',
  //   lessThan: 'Menor que',
  //   greaterThan: 'Mayor que',

  //   // for text filter
  //   contains: 'Contiene',
  //   startsWith: 'Empieza con',
  //   endsWith: 'Termina con',

  //   // the header of the default group column
  //   group: 'Grupo',

  //   // tool panel
  //   columns: 'Columna',
  //   rowGroupColumns: 'Columnas Pivote',
  //   rowGroupColumnsEmptyMessage: 'Arrastra Columnas a Agrupar',
  //   valueColumns: 'Valores de columnas',
  //   pivotMode: 'Modo-Pivote',
  //   groups: 'Grupos',
  //   values: 'Valores',
  //   pivots: 'Pivotes',
  //   valueColumnsEmptyMessage: 'la drag cols to aggregate',
  //   pivotColumnsEmptyMessage: 'la drag here to pivot',
  //   toolPanelButton: 'Panel de Herramientas',

  //   // other
  //   noRowsToShow: 'Sin Registros',

  //   // enterprise menu
  //   pinColumn: 'laPin Column',
  //   valueAggregation: 'laValue Agg',
  //   autosizeThiscolumn: 'laAutosize Diz',
  //   autosizeAllColumns: 'laAutsoie em All',
  //   groupBy: 'Agrupar Por',
  //   ungroupBy: 'Desagrupar por',
  //   resetColumns: 'Reiniciar Columnas',
  //   expandAll: 'Expandir Todo',
  //   collapseAll: 'Colapsar Todo',
  //   toolPanel: 'Panel de Herramientas',
  //   export: 'Exportar',
  //   csvExport: 'Exportar a CSV',
  //   excelExport: 'Exportar a Excel',

  //   // enterprise menu pinning
  //   pinLeft: ' <<',
  //   pinRight: ' >>',
  //   noPin: ' <>',

  //   // enterprise menu aggregation and status bar
  //   sum: 'laSum',
  //   min: 'laMin',
  //   max: 'laMax',
  //   first: 'laFirst',
  //   last: 'laLast',
  //   none: 'laNone',
  //   count: 'laCount',
  //   average: 'laAverage',

  //   // standard menu
  //   copy: 'Copiar',
  //   copyWithHeaders: 'Copiar con Encabezados',
  //   ctrlC: 'ctrl + C',
  //   paste: 'Pegar',
  //   ctrlV: 'ctrl + V'
  // };

  gridOptions = {
    enableColResize: true,
    rowSelection: 'single',
    // localeText: this.localeText,
    enableSorting: true,
    enableFilter: false,
    // pagination: false,
    // paginationAutoPageSize: true,
    rowHeight: 34,
    // defaultColDef: {
    //   menuTabs: ['filterMenuTab']
    // }
  };

  @Input() columnDefs: Array<object> = [{}];
  @Input() rowData: Array<object> = [{}];

  constructor() { }

  ngOnInit() {
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
    console.log(selectedData);
  }

  dateFormatter(params) {
    return moment(params.value).format('DD/MM/YYYY');
  }

  // showLoadingOverlay() {
  //   this.agGrid.api.showLoadingOverlay();
  // }

  // hideOverLay() {
  //   this.agGrid.api.hideOverlay();
  // }

  // showNoRowOverlay() {
  //   this.agGrid.api.showNoRowsOverlay();
  // }

}
