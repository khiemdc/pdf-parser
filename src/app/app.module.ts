import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { Pipe, PipeTransform } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UnclassifiedComponent } from './home/unclassified.component';
import { ClassifiedComponent } from './home/classified.component';
import { AllListComponent } from './home/all-list.component';
import { AllDetailComponent } from './home/all-detail.component';
import { PdfFileService } from './service/pdf-file.service';
import { SearchTagPipe } from './shared/search-tag.pipe';
import { UploadComponent } from './upload/upload.component';

@NgModule({
   declarations: [
      SearchTagPipe,
      AppComponent,
      NavbarComponent,
      UnclassifiedComponent,
      ClassifiedComponent,
      AllListComponent,
      AllDetailComponent,
      UploadComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      PdfViewerModule,
      AppRoutingModule,
      MDBBootstrapModule.forRoot()
   ],
   schemas: [
      NO_ERRORS_SCHEMA
   ],
   providers: [
      PdfFileService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
