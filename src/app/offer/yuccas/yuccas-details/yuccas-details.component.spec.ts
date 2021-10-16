import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YuccasDetailsComponent } from './yuccas-details.component';

describe('YuccasDetailsComponent', () => {
  let component: YuccasDetailsComponent;
  let fixture: ComponentFixture<YuccasDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YuccasDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YuccasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
