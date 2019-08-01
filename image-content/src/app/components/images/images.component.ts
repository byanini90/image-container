import { Component, OnInit } from '@angular/core';
import { ImageData } from 'src/app/api/models/imageData';
import { Observable } from 'rxjs';
import { ImageService } from 'src/app/api/services/image.service';
// import { ImagesQuery } from '../../api/models/image.query';
import { ImageDetail } from '../../api/models/imageDetail';
import { PaginationData } from '../../api/models/paginationData';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  imageDetails: ImageDetail[];
  paginationData: PaginationData;
  isLoading: boolean;

  images$: Observable<ImageData[]>;
  isLoading$: Observable<boolean>;

  countImages: number = 1;

  // constructor(private imageService: ImageService, private imageQuery: ImagesQuery) { }
  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.isLoading = true;
    this.fetchImages();
    // this.images$ = this.imageQuery.selectAll();
    // this.isLoading$ = this.imageQuery.selectLoading();
    // this.imageQuery.selectLoading().subscribe(res => {
    //   if (!res) {
    //     this.countImages = this.imageQuery.getCount();
    //   }
    // });
  }

  private fetchImages(isFilter: boolean = false, filterData?: string) {
    // if (!isFilter && this.imageQuery.getHasMore()) {
    //   this.countImages = 1;
    //   this.imageService.get(this.imageQuery.getPage());
    // } else if (isFilter) {
    //   this.countImages = 1;
    //   this.imageService.getFilter(filterData);
    // }
    this.imageService.getAll()
    .subscribe((data: ImageData) => {
      this.imageDetails = data.data;
      this.paginationData = data.pagination;
      this.isLoading = false;
    });
  }

  // filter(filterData: FilterData) {
  //   this.fetchImages(true, filterData);
  // }

  onScroll() {
    // this.fetchImages();
  }

}
