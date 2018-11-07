import { Component, Input, Output, ViewChild, OnInit, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-mas-input-text',
  templateUrl: './mas-input-text.component.html',
  styleUrls: ['./mas-input-text.component.css']
})
export class MasInputTextComponent implements OnInit {

  @ViewChild('inputMAS') inputMAS: ElementRef;

  @Input() label: string = ''; // Label del input
  @Input() validate: string = ''; // Regex a Ejecutar para validar input (Alphanumeric, number, etc.)
  @Input() type: string = ''; // Tipo del input (HTML) EJ. Number, Text, Email, etc.
  @Input() textInput: string = ''; // Valor/Modelo del Input
  @Input() required: boolean = false; // Valor/Modelo del Input

  @Input() maxlength: string = '';
  @Input() lowercase: string = 'false';
  @Input() uppercase: string = 'false';

  // Evento emitido al cambiar el valor del input
  // Se iguala la variable del modelo de la pantalla al retorno que se emite
  @Output() cambioValor: EventEmitter<string> = new EventEmitter();

  validField = true;
  validatorMessage = '';
  constructor() { }

  ngOnInit() {
    this.setMessageValidator();
  }

  setMessageValidator() {
    switch (this.validate) {
      case 'alphanumeric':
        this.validatorMessage = 'Solo se aceptan valores Alfanumérico';
        break;
      case 'email':
        this.validatorMessage = 'Ingrese un correo valido';
        break;
      case 'money':
        this.validatorMessage = 'Formato de moneda no valido (###,###.##)';
        break;
      default:
        break;
    }
  }

  validateCaseSensitive(newValue) {
    if (this.lowercase === 'true') {
      return newValue.toUpperCase();
    } else if (this.uppercase === 'true') {
      return newValue.toLowerCase();
    } else {
      return newValue;
    }
  }

  formatMoney(newValue: string, completeDecimals: boolean) {
    // completeDecimals funciona por motivos de no autocompletar con ".00" en caso de estar escribiendo en el input

    let splittedString = newValue.split('.');
    let integerString = splittedString[0];
    let decimalString = splittedString[1] || '';

    let moneyString = '';

    let valueArrayIntegers = integerString.replace(/,/g, '').split('').reverse();

    if (newValue.length > 0) {
      for (let i = 0; i < valueArrayIntegers.length; i++) {

        if (i >= 2 && i % 3 === 0) {
          moneyString += ',';
        }
        moneyString += valueArrayIntegers[i];
      }
      moneyString = moneyString.split('').reverse().join('');

      if (completeDecimals && !decimalString) {
        moneyString += '.00';
      } else if (completeDecimals || decimalString) {
        if (completeDecimals && decimalString.length < 2) {
          decimalString += '0';
        }
        moneyString += '.' + decimalString;
      } else if (newValue.slice(-1) === '.') {
        moneyString += '.';
      }
    }

    return moneyString.replace(/,\s*$/, '');
  }

  onChanges(newValue) {
    if ((newValue).trim() !== '') {
      this.validateField(newValue, false);
    } else {
      this.textInput = newValue;
      this.validField = true;
    }

    this.textInput = this.validateCaseSensitive(this.textInput);
    this.inputMAS.nativeElement.value = this.textInput;
    this.cambioValor.emit(this.textInput);
  }

  cambiarValor(valor) {

    this.cambioValor.emit(this.textInput);

    this.inputMAS.nativeElement.focus();

  }

  onBlur(event) {
    if ((this.textInput).trim() !== '') {
      this.validateField(this.textInput, true);
    } else {
      this.validField = true;
    }

    this.textInput = this.validateCaseSensitive(this.textInput);
    this.inputMAS.nativeElement.value = this.textInput;
    this.cambioValor.emit(this.textInput);
  }

  valid() {
    let requiredValidation = (this.required && this.textInput.trim() !== '') || (!this.required);
    return requiredValidation && this.validField;
  }

  validateField(fieldValue, formatMoney: boolean) {
    this.textInput = fieldValue;
    let regExp = /$/;
    switch (this.validate) {
      case 'alphanumeric':
        regExp = /^([a-zA-Z0-9 ]+)$/;
        if (!regExp.test(fieldValue)) {
          this.validField = false;
        } else {
          this.validField = true;
        }
        break;
      case 'money':
        regExp = /^[0-9,]*(\.[0-9]{0,2})?$/;
        if (!regExp.test(fieldValue)) {
          this.validField = false;
          this.textInput = this.formatMoney(this.textInput, formatMoney);
        } else {
          this.validField = true;
          this.textInput = this.formatMoney(this.textInput, formatMoney);
        }
        break;
      case 'email':
        // tslint:disable-next-line:max-line-length
        regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regExp.test(fieldValue)) {
          this.validField = false;
        } else {
          this.validField = true;
        }
        break;
      default:
        break;
    }
  }

}
