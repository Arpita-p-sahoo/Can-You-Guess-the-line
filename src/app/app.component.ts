import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RandomJokes';
  showPunchLine: boolean = false;
  constructor(private dataSvc: DataService) { }

  IsLoadingStarted: boolean = false;
  IsGameStarted: boolean = false;
  data: any;
  async fetchdata() {
    let fetchedData = await this.dataSvc.fetchJokes();
    if (fetchedData) {
      this.data = fetchedData;
      this.showPunchLine = false;
    }

  }

  StartLoading() {
    this.IsLoadingStarted = true;
    this.fetchdata();
    this.IsGameStarted = true;
    // this.loadAnswer();
  }

  loadAnswer = () => {
    setTimeout(() => {
      this.showPunchLine = true;
    }, 2000);
    
    // setTimeout(()=>{
    //   this.showPunchLine = true;
    // },2000)
  }
}
// data is getting read before fetching the data from api