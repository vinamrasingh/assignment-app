import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerTimestampComponent } from './timer-timestamp.component';

describe('TimerTimestampComponent', () => {
  let component: TimerTimestampComponent;
  let fixture: ComponentFixture<TimerTimestampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerTimestampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerTimestampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
