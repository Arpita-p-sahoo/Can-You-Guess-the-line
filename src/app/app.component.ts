import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RandomJokes';
  constructor(private dataSvc:DataService){}

  IsLoadingStarted:boolean = false;
  IsGameStarted:boolean = false;
  data:any;
  async fetchdata(){
    let fetchedData = await this.dataSvc.fetchJokes();
    if(fetchedData){
      this.data = fetchedData;
    }
    console.log(this.data);
    
  }

  StartLoading(){
    this.IsLoadingStarted = true;

    this.fetchdata();
    this.IsGameStarted = true;
  }
}
// data is getting read before fetching the data from api