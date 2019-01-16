import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllListComponent } from './home/all-list.component';
import { AllDetailComponent } from './home/all-detail.component';
import { UnclassifiedComponent } from './home/unclassified.component';
import { ClassifiedComponent } from './home/classified.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  { path: '', component: AllListComponent},
  { path: 'all', component: AllListComponent},
  { path: 'all/:id', component: AllDetailComponent},
  { path: 'unclassified', component: UnclassifiedComponent},
  { path: 'classified', component: ClassifiedComponent},
  { path: 'upload', component: UploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
