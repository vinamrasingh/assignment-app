import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickboxComponent } from './clickbox.component';

describe('ClickboxComponent', () => {
  let component: ClickboxComponent;
  let fixture: ComponentFixture<ClickboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
