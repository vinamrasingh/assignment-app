import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteFiveComponent } from './route-five.component';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sortBy' })
class MockPipe implements PipeTransform {
  transform(array: any, category: string, order: string): any {
    return array;
  }
}
describe('RouteFiveComponent', () => {
  let component: RouteFiveComponent;
  let fixture: ComponentFixture<RouteFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RouteFiveComponent, MockPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
