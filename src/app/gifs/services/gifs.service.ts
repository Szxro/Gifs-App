import { HttpClient,HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _history:string[]=[];
  private _apiKey:string = 'bY3tOsTfn2p3HyyScRQBMwX3Y2eupIda&q';
  public dataApi:Gif[]=[];

  get historyArg():string[]{
    return [...this._history];
  }
  
  constructor(private _http:HttpClient) { 
    //this._history = JSON.parse(localStorage.getItem('history')!); //This two lines are the same
    if(localStorage.getItem('history')) this._history = JSON.parse(localStorage.getItem('history')!);
    //this.history=JSON.parse(localStorage.getItem('history')|| []);
    this.dataApi=JSON.parse(localStorage.getItem('result')!);
  }

  setGifs(arg:string = ''):void{
    arg = arg.trim().toLocaleLowerCase();
    if(!this._history.includes(arg)){
    this._history.unshift(arg);
    this._history=this._history.splice(0,10);
  }
  localStorage.setItem('history',JSON.stringify(this._history));

  this._http.get<GifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this._apiKey}=${arg}&limit=10`)
      .subscribe(resp=>{
        this.dataApi=resp.data;
        localStorage.setItem('result',JSON.stringify(this.dataApi));
      });
}

}
