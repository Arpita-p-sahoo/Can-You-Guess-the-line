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
  async fetchdata(){
    let fetchedData = await this.dataSvc.fetchJokes();
    console.log(fetchedData);
    
  }
}
