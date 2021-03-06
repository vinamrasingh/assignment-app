import { Component, OnInit, HostListener, ViewChild, ComponentFactoryResolver, AfterViewInit, OnDestroy } from '@angular/core';
import { BoxholderDirective } from './directive/boxholder.directive';
import { ClickboxComponent } from './clickbox/clickbox.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-route-six',
  templateUrl: './route-six.component.html',
  styleUrls: ['./route-six.component.scss']
})
export class RouteSixComponent implements OnInit, OnDestroy {
  @ViewChild(BoxholderDirective, { static: true }) boxHost: BoxholderDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  componentRef: any[] = [];
  private closeSub: Subscription;
  private alertSub: Subscription = new Subscription();
  initialBoxes = 15;

  ngOnInit(): void {
    this.showBoxes();
  }
  private showBoxes() {
    const boxCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
      ClickboxComponent
    );
    const hostViewContainerRef = this.boxHost.viewContainerRef;

    for (let i = 0; i < this.initialBoxes; i++) {
      let length;
      const dynamicCmp = hostViewContainerRef.createComponent(boxCmpFactory);
      length = this.componentRef.length;
      if (length < this.initialBoxes) {
        dynamicCmp.instance.counter = i + 1;
      } else if (length >= this.initialBoxes) {
        dynamicCmp.instance.counter = length + 1;
      }
      const dynamicCmpSub = dynamicCmp.instance.alert.subscribe(() => {
        alert('You have clicked box ' + dynamicCmp.instance.counter);
      });
      this.componentRef.push(dynamicCmp);
      this.alertSub.add(dynamicCmpSub);
    }
  }
  ngOnDestroy(): void {
    if (this.alertSub) {
      this.alertSub.unsubscribe();
    }
    throw new Error('Method not implemented.');
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      console.log('End');
      this.showBoxes();
    }
  }
}
