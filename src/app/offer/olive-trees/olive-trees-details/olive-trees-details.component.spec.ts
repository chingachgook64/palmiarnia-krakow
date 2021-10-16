import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OliveTreesDetailsComponent } from './olive-trees-details.component';

describe('OliveTreesDetailsComponent', () => {
  let component: OliveTreesDetailsComponent;
  let fixture: ComponentFixture<OliveTreesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OliveTreesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OliveTreesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
