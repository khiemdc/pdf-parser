import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicService } from '../service/comic.service';
import { Comic } from '../all/all';

@Component({
  selector: 'app-all-detail',
  templateUrl: './all-detail.component.html'
})
export class AllDetailComponent implements OnInit, OnDestroy {
  public comics: Comic[] = [];
  file: any;
  private routeSub: any;
  id: string;
  constructor(private comicService: ComicService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      // console.log(params);
      this.id = params['id'];
      this.comicService.getComics()
    .subscribe(res => {
      this.comics = res.filter(item => {
          if (item.id == this.id ) {
            this.file = item;
            // console.log(this.file);
          }
        }
      });
    });
  }
  
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
