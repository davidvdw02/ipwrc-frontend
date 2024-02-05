import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ChooseEditProductService } from './choose-edit-product.service';
import { HttpClientModule } from '@angular/common/http';

describe('ChooseEditProductService', () => {
  let service: ChooseEditProductService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [ChooseEditProductService],
    });

    service = TestBed.inject(ChooseEditProductService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
