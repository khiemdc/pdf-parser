import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllListComponent } from './all/all-list.component';
import { AllDetailComponent } from './all/all-detail.component';

const routes: Routes = [
  { path: '', component: AllListComponent},
  { path: 'all', component: AllListComponent},
  { path: 'all/:id', component: AllDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
