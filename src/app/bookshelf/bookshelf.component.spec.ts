import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

import { BookshelfComponent } from './bookshelf.component';
import { BookshelfService } from './bookshelf.service';

describe('BookshelfComponent', () => {
  let component: BookshelfComponent;
  let fixture: ComponentFixture<BookshelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      declarations: [
        BookshelfComponent,
      ],
      providers: [
        BookshelfService,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookshelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async(inject([BookshelfService], (service: BookshelfService) => {
    expect(component).toBeTruthy();
  })));
});
