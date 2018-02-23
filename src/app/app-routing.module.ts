import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HollistComponent } from './hollist/hollist.component';
import { HoldetailComponent } from './holdetail/holdetail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HollistComponent },
  { path: 'detail/:id', component: HoldetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}