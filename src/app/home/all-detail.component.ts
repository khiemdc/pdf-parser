import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PdfFileService } from '../service/pdf-file.service';
import { PdfFile } from '../shared/pdfFile';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-all-detail',
  templateUrl: './all-detail.component.html'
})
export class AllDetailComponent implements OnInit, OnDestroy {
  public comics: PdfFile[] = [];
  file: any;
  private routeSub: any;
  id: string;
  pdfQuery = '';
  error: any;
  pdf: any;
  renderText = true;
   

  @ViewChild(PdfViewerComponent) private pdfComponent: PdfViewerComponent;
  constructor(private pdfFileService: PdfFileService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      // console.log(params);
      this.id = params['id'];
      this.pdfFileService.getPdfFiles()
    .subscribe(res => {
      this.comics = res.filter(item => {
          if (item.id == this.id ) {
            this.file = item;
            // console.log(this.file);
          }
        });
      });
    });
  }
  
  searchQueryChanged(newQuery: string) {
    if (newQuery !== this.pdfQuery) {
      this.pdfQuery = newQuery;
      this.pdfComponent.pdfFindController.executeCommand('find', {
        query: this.pdfQuery,
        highlightAll: true
      });
    } else {
      this.pdfComponent.pdfFindController.executeCommand('findagain', {
        query: this.pdfQuery,
        highlightAll: true
      });
    }
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
