import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteSixComponent } from './route-six.component';
import { ViewContainerRef } from '@angular/core';
import { BoxholderDirective } from './directive/boxholder.directive';

class TestViewContainerRef extends ViewContainerRef {
  get element(): import('@angular/core').ElementRef<any> {
    throw new Error('Method not implemented.');
  }
  get injector(): import('@angular/core').Injector {
    throw new Error('Method not implemented.');
  }
  get parentInjector(): import('@angular/core').Injector {
    throw new Error('Method not implemented.');
  }
  clear(): void {
    throw new Error('Method not implemented.');
  }
  get(index: number): import('@angular/core').ViewRef {
    throw new Error('Method not implemented.');
  }
  get length(): number {
    throw new Error('Method not implemented.');
  }
  createEmbeddedView<C>(
    templateRef: import('@angular/core').TemplateRef<C>,
    context?: C, index?: number): import('@angular/core').EmbeddedViewRef<C> {
    throw new Error('Method not implemented.');
  }
  createComponent<C>(
    componentFactory: import('@angular/core').ComponentFactory<C>,
    index?: number,
    injector?: import('@angular/core').Injector,
    projectableNodes?: any[][],
    ngModule?: import('@angular/core').NgModuleRef<any>): import('@angular/core').ComponentRef<C> {
    throw new Error('Method not implemented.');
  }
  insert(viewRef: import('@angular/core').ViewRef, index?: number): import('@angular/core').ViewRef {
    throw new Error('Method not implemented.');
  }
  move(viewRef: import('@angular/core').ViewRef, currentIndex: number): import('@angular/core').ViewRef {
    throw new Error('Method not implemented.');
  }
  indexOf(viewRef: import('@angular/core').ViewRef): number {
    throw new Error('Method not implemented.');
  }
  remove(index?: number): void {
    throw new Error('Method not implemented.');
  }
  detach(index?: number): import('@angular/core').ViewRef {
    throw new Error('Method not implemented.');
  }

}


describe('RouteSixComponent', () => {
  let component: RouteSixComponent;
  let fixture: ComponentFixture<RouteSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RouteSixComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteSixComponent);
    component = fixture.componentInstance;
    component.boxHost = new BoxholderDirective(new TestViewContainerRef());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toThrowError();
  });
});
