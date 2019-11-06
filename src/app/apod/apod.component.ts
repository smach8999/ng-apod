import { Component, OnInit } from '@angular/core';
//1. Import ActivatedRoute
import { ActivatedRoute } from '@angular/router';
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
    
  //  removed  
  // constructor(private apodService: ApodService) { }
  //  added Inject ActivatedRoute into the constructor
    constructor(
      private apodService: ApodService,
      //2. Inject ActivatedRoute into the constructor
      private router: ActivatedRoute
    ) { }

  // removed 
  // v1 ngOnInit() {
  //   console.log(this.apodService.getApod());
  //  v2 update ngOnInit() so that it subscribes to the getApod() method in the service.

  // ngOnInit() {
  //   this.getApod();
  // }

  ngOnInit() {
    //3. Subscribe to parameterized route
    this.router.params.subscribe((params) => {
      this.getApod(params['date']);
    });
  }


  // getApod(): void{
  //   let date = new Date().toISOString().slice(0,10);

    //4. Replace the current date with an updated method signature
    getApod(date:string): void{

    this.apodService.getApod(date).subscribe(
      (response:any)=>{
        this.apod = response;


        //5. Log the results to the JS console
        console.log(response);
      }
    );
    }
  }