import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoticTreesComponent } from './exotic-trees.component';

describe('ExoticTreesComponent', () => {
  let component: ExoticTreesComponent;
  let fixture: ComponentFixture<ExoticTreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoticTreesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoticTreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
