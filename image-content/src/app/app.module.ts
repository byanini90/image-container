import { BrowserModule, } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

//Components
import { AppComponent } from './app.component';
import { ImagesComponent } from './components/images/images.component';
import { ImageComponent } from './components/image/image.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

//Services
import { ImageService } from './api/services/image.service';
import { InMemoryDb } from './api/models/inMemoryDb';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';
// import { ImagesQuery } from './api/models/image.query';

//ROUTES
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    NavbarComponent,
    ImageComponent,
    InfiniteScrollComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDb, { delay: 2500}),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    InMemoryDb,
    // ImagesQuery,
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
