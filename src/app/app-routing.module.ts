import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './components/content/content.component';


const routes: Routes = [
  {
    path: ':id',
    children: [
      {
          path: ':id',
          component: ContentComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/introduction/welcome',
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
