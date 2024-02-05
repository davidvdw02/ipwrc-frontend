import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of } from 'rxjs';
import { ChooseEditProductComponent } from './choose-edit-product.component';
import { ChooseEditProductService } from './choose-edit-product.service';
import { Product } from 'src/app/interfaces/product.interface';
import { Category } from 'src/app/interfaces/category.interface';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FormsModule } from '@angular/forms';

describe('ChooseEditProductComponent', () => {
  let component: ChooseEditProductComponent;
  let fixture: ComponentFixture<ChooseEditProductComponent>;
  let mockChooseEditProductService: jasmine.SpyObj<ChooseEditProductService>;
  let mockMatDialog: jasmine.SpyObj<MatDialog>;

  const mockProducts: Product[] = [
  ];

  const mockCategories: Category[] = [
    { categoryId: 1, categoryName: 'Category 1' },
    { categoryId: 2, categoryName: 'Category 2' },
  ];

  beforeEach(
    waitForAsync(() => {
      mockChooseEditProductService = jasmine.createSpyObj('ChooseEditProductService', [
        'getAllProducts',
        'getAllCategories',
        'updateProduct',
      ]);

      mockMatDialog = jasmine.createSpyObj('MatDialog', ['open']);

      TestBed.configureTestingModule({
        declarations: [ChooseEditProductComponent],
        imports: [MatDialogModule, FormsModule],
        providers: [
          { provide: ChooseEditProductService, useValue: mockChooseEditProductService },
          { provide: MatDialog, useValue: mockMatDialog },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseEditProductComponent);
    component = fixture.componentInstance;
    mockChooseEditProductService.getAllProducts.and.returnValue(of(mockProducts));
    mockChooseEditProductService.getAllCategories.and.returnValue(of(mockCategories));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
