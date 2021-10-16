import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YuccasComponent } from './yuccas.component';

describe('YuccasComponent', () => {
  let component: YuccasComponent;
  let fixture: ComponentFixture<YuccasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YuccasComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YuccasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
