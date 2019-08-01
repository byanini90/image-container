import { Injectable } from '@angular/core';
import { ImageData } from '../models/imageData';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { InMemoryDb } from '../models/inMemoryDb';
// import { ImageStore } from '../models/image.store';
import { transaction } from '@datorama/akita';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private imagesUrl = 'api/images';  // URL to web api

  //constructor(private http: HttpClient, private inMemoryDb: InMemoryDb, private imageStore: ImageStore) { }
  constructor(private http: HttpClient, private inMemoryDb: InMemoryDb) {}

  getAll(): Observable<ImageData> {
    return this.http.get<ImageData>(`${this.imagesUrl}`);
  }

  filter(filterData: string) {
    return this.http.get<ImageData[]>(`${this.imagesUrl}/?name=${filterData}`);
  }

  /*get(page: number) {
    this.imageStore.setLoading(true);
    this.getImages({ page });
  }

  getFilter(filterData: string) {
    this.imageStore.setLoading(true);
    this.getFilterImages(filterData);
  }

  @transaction()
  private updateImages(res) {
    const nextPage = res.currentPage + 1;
    this.imageStore.add(res.data);
    this.imageStore.updatePage({ hasMore: res.hasMore, page: nextPage });
    this.imageStore.setLoading(false);
  }

  getData(params = { page: 1 }) {
    const limitPerPage = 10;
    const offset = (params.page - 1) * limitPerPage;
    this.getAll().subscribe(res => {
      const paginatedItems = res.slice(offset, offset + limitPerPage);
      const hasMore = offset + limitPerPage !== res.length;
      this.updateImages( {
        currentPage: params.page,
        hasMore,
        perPage: limitPerPage,
        total: res.length,
        lastPage: Math.ceil(res.length / limitPerPage),
        data: paginatedItems
      });
    });
  }

  getFilterData(filterdata: string, params = { page: 1 }) {
    this.imageStore.remove();
    const limitPerPage = 10;
    const offset = (params.page - 1) * limitPerPage;
    this.filter(filterdata).subscribe(res => {
      const paginatedItems = res.slice(offset, offset + limitPerPage);
      const hasMore = offset + limitPerPage !== res.length;
      this.updateImages( {
        currentPage: params.page,
        hasMore,
        perPage: limitPerPage,
        total: res.length,
        lastPage: Math.ceil(res.length / limitPerPage),
        data: paginatedItems
      });
    });
  }

  getImages(params?) {
    return this.getData(params);
  }

  getFilterImages(filterdata: string) {
    return this.getFilterData(filterdata);
  }*/
}
