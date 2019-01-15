import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UnclassifiedComponent } from './unclassified/unclassified.component';
import { ClassifiedComponent } from './classified/classified.component';
import { AllListComponent } from './all/all-list.component';
import { AllDetailComponent } from './all/all-detail.component';
import { ComicService } from './service/comic.service';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      UnclassifiedComponent,
      ClassifiedComponent,
      AllListComponent,
      AllDetailComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      PdfViewerModule,
      AppRoutingModule,
      MDBBootstrapModule.forRoot()
   ],
   schemas: [
      NO_ERRORS_SCHEMA
   ],
   providers: [
      ComicService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
