import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ImageDetail } from '../../api/models/imageDetail';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() image: ImageDetail;

  show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
