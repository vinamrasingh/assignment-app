import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteTwoComponent } from './route-two.component';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderbyPipe' })
class MockPipe implements PipeTransform {
  transform(array: any, category: string, order: string): any {
    return array;
  }
}

describe('RouteTwoComponent', () => {
  let component: RouteTwoComponent;
  let fixture: ComponentFixture<RouteTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RouteTwoComponent, MockPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
