import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudSectorComponent } from './crud-sector.component';

describe('CrudSectorComponent', () => {
  let component: CrudSectorComponent;
  let fixture: ComponentFixture<CrudSectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudSectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
