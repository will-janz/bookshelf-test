import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

// Bookshelf
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { BookshelfService } from './bookshelf/bookshelf.service';


@NgModule({
  declarations: [
    AppComponent,
    BookshelfComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    BookshelfService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
