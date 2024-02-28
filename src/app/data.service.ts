import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any[] = [];

  constructor(private httpClient: HttpClient) { }

  fetchJokes() {
    return new Promise<any>((resolve, reject) => {
      this.httpClient.get<any>('https://official-joke-api.appspot.com/random_joke')
        .subscribe({
          next: (data) => {
            resolve(data); // Resolve with the fetched data
          },
          error: (error) => {
            reject('Error fetching data from API'); // Reject with an error message
          }
        });
    });
  }
}
// https://official-joke-api.appspot.com/jokes/programming/random programming random
// https://github.com/15Dkatz/official_joke_api?tab=readme-ov-file get api detail here