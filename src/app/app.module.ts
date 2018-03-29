import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
  MatTableModule,
} from '@angular/material';


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
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
  ],
  providers: [
    BookshelfService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
