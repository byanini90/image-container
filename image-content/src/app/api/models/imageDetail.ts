import { ImageLinkData } from './imageLinkData';
import { ImageMainAttachmentData } from './imageMainAttachmentData';

export interface ImageDetail {

    type: string;
    id: number;
    title: string;
    author: string;
    created_at: number;
    main_attachment: ImageMainAttachmentData;
    likes_count: number;
    liked: boolean;
    links: ImageLinkData[];
}
