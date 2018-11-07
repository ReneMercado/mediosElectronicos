import { Component, Input, Output, ViewChild, OnInit, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { element } from 'protractor';
declare var $: any;

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styles: []
})
export class InputSelectComponent implements OnInit {

  @ViewChild('inputSelectRef') inputSelectRef: ElementRef;

  @Input() label: string = ''; // Label del input
  @Input() inputSelect: string = ''; // Valor/Modelo del Input
  @Input() title: string = ''; // Place Holder cuando nada es seleccionado

  @Input() optionValue: string = ''; // Valor de las opciones a Almacenar
  @Input() valueShow: string = ''; // Valor de las opciones a Mostrar
  @Input() defaultValue: string = ''; // Valor Default

  @Input() required: boolean = false;

  @Output() valueChanged: EventEmitter<string> = new EventEmitter();

  iterableDiffer = null;
  options = '';

  constructor() {
  }

  ngOnInit() {
  }



  onChanges(newValue) {
    this.valueChanged.emit(newValue);
  }


  changeOptions(newOptions: Array<object>, selectValue?: any) {

    $(this.inputSelectRef.nativeElement).empty();
    newOptions.forEach(option => {
      $(this.inputSelectRef.nativeElement).append(`<option value="${option[this.optionValue]}">${option[this.valueShow]}</option>`);
    });

    $(this.inputSelectRef.nativeElement).selectpicker('refresh');

    if (selectValue) {
      this.setOption(selectValue);
    }

  }

  setOption(selectValue: any) {
    $(this.inputSelectRef.nativeElement).selectpicker('val', selectValue);
    $(this.inputSelectRef.nativeElement).selectpicker('refresh');
  }

  getSelected() {
    return $(this.inputSelectRef.nativeElement).selectpicker('val');
  }

  valid() {
    let value = this.getSelected();
    return (this.required && value) || (!this.required);
  }
}
