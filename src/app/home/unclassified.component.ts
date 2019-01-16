import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { PdfFileService } from '../service/pdf-file.service';
import { PdfFile } from '../shared/pdfFile';
import {SearchTagPipe} from '../shared/search-tag.pipe';

@Component({
  selector: 'app-unclassified',
  templateUrl: './unclassified.component.html'
})
export class UnclassifiedComponent implements OnInit {
  type: string;
  public files: PdfFile[] = [];
  todayDate;
  constructor(private pdfFileService: PdfFileService,
              private http: HttpClient) { }

  ngOnInit() {
    this.todayDate = new Date();
    this.pdfFileService.getPdfFiles()
    .subscribe(res => {
      this.files = res;
      // console.log(this.files);
      });
  }

}