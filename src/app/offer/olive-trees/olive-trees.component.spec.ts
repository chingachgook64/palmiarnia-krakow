import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OliveTreesComponent } from './olive-trees.component';

describe('OliveTreesComponent', () => {
  let component: OliveTreesComponent;
  let fixture: ComponentFixture<OliveTreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OliveTreesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OliveTreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
