import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitrusesComponent } from './citruses.component';

describe('CitrusesComponent', () => {
  let component: CitrusesComponent;
  let fixture: ComponentFixture<CitrusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitrusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitrusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
