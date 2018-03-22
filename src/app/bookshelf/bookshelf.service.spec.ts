import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BookshelfService } from './bookshelf.service';

describe('BookshelfService', () => {
  let injector: TestBed;
  let service: BookshelfService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        BookshelfService,
      ],
    });

    injector = getTestBed();
    service = injector.get(BookshelfService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<Book[]>', () => {

    service.getBooks().subscribe(books => {
      // Just make sure something's there
      expect(books.length).toBeGreaterThan(1);
    });

    const req = httpMock.expectOne(`${service.API_URL}/books`);
    expect(req.request.method).toBe('GET');
    req.flush({
      meaningless: 'data',
    });
  });
});
