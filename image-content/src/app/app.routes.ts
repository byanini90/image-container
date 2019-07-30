import { Routes } from '@angular/router';
import { ImagesComponent } from './components/images/images.component';

export const ROUTES: Routes = [
    {path: 'images', component: ImagesComponent},
    {path: '', pathMatch: 'full', redirectTo: 'images'},
    {path: '**', pathMatch: 'full', redirectTo: 'images'}
];
