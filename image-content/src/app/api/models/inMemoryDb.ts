import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ImageData } from 'src/app/api/models/imageData';
import * as faker from 'faker/locale/es';
import { ImageDetail } from './imageDetail';

export class InMemoryDb implements InMemoryDbService {

    createDb() {
        const images: ImageData = this.manyImages(20);
        return { images };
    }


    oneImage = (): ImageDetail => {
        return {
            id: faker.random.number(),
            type: 'image',
            title: faker.random.words(3),
            author: faker.name.firstName(),
            created_at: faker.date.past().getDate(),
            main_attachment: {
                big: faker.image.image(),
                small: faker.image.image(),
            },
            likes_count: faker.random.number(),
            liked: faker.random.boolean(),
            links: [
                {
                    rel: 'avatar',
                    uri: faker.random.image(),
                    methods: 'GET'
                },
                {
                    rel: 'like',
                    uri: faker.random.image(),
                    methods: 'POST'
                }
            ]
        };
    }

    manyImages = (count: number = faker.random.number(100)) => {
        const res: ImageData = {
            data: [],
            pagination: {
                next: '',
                previous: null
            }};
        for (let i = 0; i < count; i++) {
            res.data.push(this.oneImage());
        }
        return res;
    }

    getUser(): number {
        return 1001;
    }

}