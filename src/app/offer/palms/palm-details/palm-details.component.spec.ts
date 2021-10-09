import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalmDetailsComponent } from './palm-details.component';

describe('PalmDetailsComponent', () => {
  let component: PalmDetailsComponent;
  let fixture: ComponentFixture<PalmDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalmDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
