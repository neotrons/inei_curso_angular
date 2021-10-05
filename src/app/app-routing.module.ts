import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello.component';
import { FirstComponent } from './first/first.component';
import { ExampleChapterComponent } from './example/example-chapter/example-chapter.component'

import { WebsiteLayout } from './layouts/website/website.layout';
import { AdministratorLayout } from './layouts/administrator/administrator.layout';

const routes: Routes = [
  {
    path: '',
    component: WebsiteLayout,
    children: [
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
        path: 'contact',
        loadChildren: () => import('./modules/contacts/contacts.module').then(m => m.ContactsModule)
      },
    ]
  },
  {
    path: 'admin',
    component: AdministratorLayout,
    children: []
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
