import { Component, Input, Output, ViewChild, OnInit, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.css']
})
export class InputFileComponent implements OnInit {

  @ViewChild('hiddenInput') hiddenInput: ElementRef;
  @Input() accept: string = '.txt';
  @Output() fileTextChanged: EventEmitter<string> = new EventEmitter();
  fileName: '';

  constructor() { }

  ngOnInit() {
  }

  openFile(e: Event) {
    $(this.hiddenInput.nativeElement).click();
    e.preventDefault();
  }

  onChangeFile(e: Event) {
    let filename = this.hiddenInput.nativeElement.value.replace(/^.*\\/, '');
    if (filename !== '') {
      this.fileName = filename;
      this.getFileText();
    } else {
      this.fileName = '';
    }
  }

  getFileText() {
    let file = this.hiddenInput.nativeElement.files[0];
    let reader = new FileReader();
    reader.readAsText(file, 'windows-1252');
    reader.onload = (e: any) => {
      this.fileTextChanged.emit(e.currentTarget.result);
    };
  }

  reset() {
    $(this.hiddenInput.nativeElement).val('');
    this.fileName = '';
  }

}
