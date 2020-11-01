import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDoctypeComponent } from './crud-doctype.component';

describe('CrudDoctypeComponent', () => {
  let component: CrudDoctypeComponent;
  let fixture: ComponentFixture<CrudDoctypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudDoctypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDoctypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
