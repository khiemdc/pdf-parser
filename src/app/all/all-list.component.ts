import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComicService } from '../service/comic.service';
import { Comic } from '../all/all';

@Component({
  selector: 'app-all-list',
  templateUrl: './all-list.component.html'
})
export class AllListComponent implements OnInit {
  public comics: Comic[] = [];
  todayDate;
  constructor(private service: ComicService,
              private http: HttpClient) { }

  ngOnInit() {
    this.todayDate = new Date();
    this.service.getComics()
    .subscribe(res => {
      this.comics = res;
      // console.log(this.comics);
      });
  }

}
