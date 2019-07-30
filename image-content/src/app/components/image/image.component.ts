import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ImageData } from '../../api/models/imageData';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() image: ImageData;
  @Input() imageSelected: boolean = false;

  @Output() closeModal?: EventEmitter<void> = new EventEmitter();

  show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
