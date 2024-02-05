import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddCategoryDialogComponent } from './add-category-dialog.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe('AddCategoryDialogComponent', () => {
  let component: AddCategoryDialogComponent;
  let fixture: ComponentFixture<AddCategoryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCategoryDialogComponent],
      imports: [MatDialogModule], // Import MatDialogModule
      providers: [
        { provide: MatDialogRef, useValue: {} }, // Provide a mock MatDialogRef
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
