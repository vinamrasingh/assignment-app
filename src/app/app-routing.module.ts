import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'route-one',
    loadChildren: () => import('./route-one/route-one.module')
      .then(m => m.RouteOneModule)
  },
  {
    path: 'route-two',
    loadChildren: () => import('./route-two/route-two.module')
      .then(m => m.RouteTwoModule)
  },
  {
    path: 'route-three',
    loadChildren: () => import('./route-three/route-three.module')
      .then(m => m.RouteThreeModule)
  },
  {
    path: 'route-four',
    loadChildren: () => import('./route-four/route-four.module')
      .then(m => m.RouteFourModule)
  },
  {
    path: 'route-five',
    loadChildren: () => import('./route-five/route-five.module')
      .then(m => m.RouteFiveModule)
  },
  {
    path: 'route-six',
    loadChildren: () => import('./route-six/route-six.module')
      .then(m => m.RouteSixModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
