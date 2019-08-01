import { ImageDetail } from './imageDetail';
import { PaginationData } from './paginationData';

export interface ImageData {

    data: ImageDetail[];
    pagination: PaginationData;
}
