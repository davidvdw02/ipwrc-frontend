import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseEditProductComponent } from './choose-edit-product.component';

describe('ChooseEditProductComponent', () => {
  let component: ChooseEditProductComponent;
  let fixture: ComponentFixture<ChooseEditProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseEditProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseEditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
