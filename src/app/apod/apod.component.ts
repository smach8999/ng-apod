import { Component, OnInit } from '@angular/core';

import { ApodService } from '../api/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  constructor(private apodService: ApodService) { }

  // removed 
  // ngOnInit() {
  //   console.log(this.apodService.getApod());
  //  update ngOnInit() so that it subscribes to the getApod() method in the service.
  ngOnInit() {
    this.apodService.getApod().subscribe(
      (response:any)=>{
        console.log(response);
      }
    );

  }

}