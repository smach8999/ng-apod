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
    //1. Create date as an instance variable
    date:string;
    
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

    //If the date is falsy, use today's date
    if(!date){
      date = new Date().toISOString().slice(0,10);
    }

    this.apodService.getApod(date).subscribe(
      (response:any)=>{
        this.apod = response;

      //3.  Update this.date on each API call
        this.date = this.randomDate(new Date(1995,5,16), new Date());
  
      //4. Log this.date to the JS console
        console.log(this.date);

        //5. Log the results to the JS console
        console.log(response);
      }
    );
  }

  //2. Create a method that returns a random date
  randomDate(start, end): string{
    let date = new Date(
      start.getTime() + Math.random() *
        (end.getTime() - start.getTime())
    );

    return new Date(date).toISOString().slice(0,10);
  }

}