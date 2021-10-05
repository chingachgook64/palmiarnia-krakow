import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoticPlantsComponent } from './exotic-plants.component';

describe('ExoticPlantsComponent', () => {
  let component: ExoticPlantsComponent;
  let fixture: ComponentFixture<ExoticPlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExoticPlantsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoticPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
