import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  
  constructor(private gifsService:GifsService) { }

  get HistoryArr():string[]{
    return this.gifsService.historyArg;
  }

  data(data:string){
   this.gifsService.setGifs(data);
  }

  ngOnInit(): void {
  }

}
