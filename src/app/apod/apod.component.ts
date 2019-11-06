import { Component, OnInit } from '@angular/core';
import { ApodService } from '../api/apod.service';
// 11- 05 added Create the instance variable apod:Apod
import { Apod } from '../models/apod';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {
    
  //  11-05
    apod:Apod; 

  constructor(private apodService: ApodService) { }

  // removed 
  // v1 ngOnInit() {
  //   console.log(this.apodService.getApod());
  //  v2 update ngOnInit() so that it subscribes to the getApod() method in the service.

  ngOnInit() {
    this.getApod();
  }

  getApod(): void{
    let date = new Date().toISOString().slice(0,10);

    this.apodService.getApod(date).subscribe(
      (response:any)=>{
        this.apod = response;
      }
    );
    }
  }