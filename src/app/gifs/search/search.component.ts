import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent  {

  @ViewChild('input__text') txtSearch!:ElementRef<HTMLInputElement>;

  constructor(private gifsService:GifsService){}

  getData(){
    const  $inputValue=this.txtSearch.nativeElement.value;
    if($inputValue.length===0) return;
    this.gifsService.setGifs($inputValue);
    this.txtSearch.nativeElement.value='';
  }
}
