import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  constructor() { }
// creating a method
  getApod(): string{
    return 'Hello World';
  }
}
