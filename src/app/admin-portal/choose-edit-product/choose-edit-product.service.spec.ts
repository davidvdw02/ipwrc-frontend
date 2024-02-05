import { TestBed } from '@angular/core/testing';

import { ChooseEditProductService } from './choose-edit-product.service';

describe('ChooseEditProductService', () => {
  let service: ChooseEditProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChooseEditProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
