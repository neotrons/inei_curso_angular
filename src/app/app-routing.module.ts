import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello.component';
import { FirstComponent } from './first/first.component';
import { ExampleChapterComponent } from './example/example-chapter/example-chapter.component'


const routes: Routes = [
  {
    path: 'hello',
    component: HelloComponent,
  },
  {
    path: 'first',
    component: FirstComponent,
  },
  {
    path: 'example',
    component: ExampleChapterComponent
  },
  {
    path: 'map',
    loadChildren: () => import('./modules/maps/maps.module').then(m => m.MapsModule)
  },

  {
    path: 'report',
    loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule)
  },

  {
    path: '**',
    component: HelloComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
