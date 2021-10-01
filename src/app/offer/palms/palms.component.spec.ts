import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalmsComponent } from './palms.component';

describe('PalmsComponent', () => {
  let component: PalmsComponent;
  let fixture: ComponentFixture<PalmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
