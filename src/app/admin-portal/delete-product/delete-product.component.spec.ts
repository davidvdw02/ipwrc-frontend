import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteproductComponent } from './delete-product.component';

describe('DeleteproductComponent', () => {
  let component: DeleteproductComponent;
  let fixture: ComponentFixture<DeleteproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});