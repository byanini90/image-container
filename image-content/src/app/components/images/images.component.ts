import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/api/services/image.service';
import { ImageData } from 'src/app/api/models/imageData';
import { Observable } from 'rxjs';
import { ImagesQuery } from '../../api/models/image.query';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  images$: Observable<ImageData[]>;
  isLoading$: Observable<boolean>;

  countImages: number = 1;

  constructor(private imageService: ImageService, private imageQuery: ImagesQuery) { }

  ngOnInit() {
    this.fetchImages();
    this.images$ = this.imageQuery.selectAll();
    this.isLoading$ = this.imageQuery.selectLoading();
    this.imageQuery.selectLoading().subscribe(res => {
      if (!res) {
        this.countImages = this.imageQuery.getCount();
      }
    });
  }

  private fetchImages(isFilter: boolean = false, filterData?: FilterData) {
    if (!isFilter && this.imageQuery.getHasMore()) {
      this.countImages = 1;
      this.imageService.get(this.imageQuery.getPage());
    } else if (isFilter) {
      this.countImages = 1;
      this.imageService.getFilter(filterData);
    }
  }

  filter(filterData: FilterData) {
    this.fetchImages(true, filterData);
  }

  onScroll() {
    this.fetchImages();
  }

}
