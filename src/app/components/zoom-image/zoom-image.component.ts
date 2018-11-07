import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-zoom-image',
  templateUrl: './zoom-image.component.html',
  styleUrls: ['./zoom-image.component.css']
})
export class ZoomImageComponent implements OnInit {

  @ViewChild('img') img: ElementRef;
  @ViewChild('modal') modal: ElementRef;
  @ViewChild('modalClose') modalClose: ElementRef;
  @ViewChild('modalImg') modalImg: ElementRef;
  @ViewChild('modalCaption') modalCaption: ElementRef;
  @Input() imgSrc: string = '';
  @Input() caption: string = '';

  constructor() { }

  ngOnInit() {
    $(this.img.nativeElement).click((e) => {
      this.modal.nativeElement.style.display = 'block';
      this.modalImg.nativeElement.src = this.img.nativeElement.src;
      this.modalCaption.nativeElement.innerHTML = this.img.nativeElement.alt;
    });

    $(this.modalClose.nativeElement).click((e) => {
      this.modal.nativeElement.style.display = 'none';
    });
  }

}
