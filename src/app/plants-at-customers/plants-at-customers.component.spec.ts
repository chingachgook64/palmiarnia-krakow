import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsAtCustomersComponent } from './plants-at-customers.component';

describe('PlantsAtCustomersComponent', () => {
  let component: PlantsAtCustomersComponent;
  let fixture: ComponentFixture<PlantsAtCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantsAtCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsAtCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
