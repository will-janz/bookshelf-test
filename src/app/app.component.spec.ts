import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
  MatTableModule,
} from '@angular/material';

import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { BookshelfService } from './bookshelf/bookshelf.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSortModule,
        MatTableModule,
      ],
      declarations: [
        AppComponent,
        BookshelfComponent,
      ],
      providers: [
        BookshelfService,
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
