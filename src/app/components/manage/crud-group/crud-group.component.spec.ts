import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudGroupComponent } from './crud-group.component';

describe('CrudGroupComponent', () => {
  let component: CrudGroupComponent;
  let fixture: ComponentFixture<CrudGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
