import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoticPlantsDetailsComponent } from './exotic-plants-details.component';

describe('ExoticPlantsDetailsComponent', () => {
  let component: ExoticPlantsDetailsComponent;
  let fixture: ComponentFixture<ExoticPlantsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoticPlantsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoticPlantsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
