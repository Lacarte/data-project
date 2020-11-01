import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPackageComponent } from './crud-package.component';

describe('CrudPackageComponent', () => {
  let component: CrudPackageComponent;
  let fixture: ComponentFixture<CrudPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudPackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
