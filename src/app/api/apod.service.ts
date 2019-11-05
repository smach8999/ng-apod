// The second and third libraries HttpClient and Observable will be imported into the apod service.
// HttpClient will be injected into the constructor and used in the getApod() method to make a GET request. getApod() 
// will return an Observable stream that we can subscribe to from a component. In addition to the libraries, 
// we will import the Apod model. This will allow our Observable to be of type Apod. Without the Apod model, our observable could be of type any.

import { Injectable } from '@angular/core';
//Import HttpClient
import { HttpClient } from '@angular/common/http';

//Import Observable
import { Observable } from 'rxjs';

//Import Apod
import { Apod } from '../models/apod';

import { NgApodConfig } from '../../../config/ng-apod.config';

@Injectable({
  providedIn: 'root'
})
export class ApodService {
//  removed  constructor(private ngApodConfig: NgApodConfig) { }
//  added
private url:string

constructor(
  private http: HttpClient,
  private ngApodConfig: NgApodConfig
) {
  this.url=`https://api.nasa.gov/planetary/apod?api_key=${this.ngApodConfig.key}`;
}
//  added end

  //  removed getApod(): string{
  //   return this.ngApodConfig.key;

  //  added
  //Return an Observable Apod model
    getApod(): Observable<Apod>{
      //Make a get request over HTTP
      return this.http.get<Apod>(this.url);
  //  added end
  }

}