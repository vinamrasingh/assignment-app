import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appBoxholder]'
})
export class BoxholderDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
