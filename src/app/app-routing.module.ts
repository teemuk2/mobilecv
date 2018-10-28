import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {path: 'list', loadChildren: './list/list.module#ListPageModule'},  { path: 'projectwork', loadChildren: './projectwork/projectwork.module#ProjectworkPageModule' },
  { path: 'activities', loadChildren: './activities/activities.module#ActivitiesPageModule' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
