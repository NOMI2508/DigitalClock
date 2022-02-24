import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digi-clock',
  templateUrl: './digi-clock.component.html',
  styleUrls: ['./digi-clock.component.css'],
})
export class DigiClockComponent implements OnInit {
  private daysArray = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  private date = new Date();

  public hour: any;
  public minute: any;
  public second: any;
  public ampm: any;
  public day: any;
  public Date: any;
  public month: any;
  public year: any;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      const date = new Date();
      this.miltaryTime(date);
      this.commonTime(date);
      //this.formateChange
    }, 1000); // this will call the updateDate method in each second

    this.day = this.daysArray[this.date.getDay()];
    // getDay() returnsthe day in integer formate,from 0 to 6 then takes the corresponding number from the array
  }

  private miltaryTime(date: Date) {
    const hours = date.getHours(); //get the hours from the Date

   
    this.hour = this.hour < 10 ? '0' + hours : hours; // if the hour is single digit, then add 0 to the hour

    const minutes = date.getMinutes(); //get the minutes from the Date
    this.minute = minutes < 10 ? '0' + minutes : minutes.toString();

    const second = date.getSeconds(); //get the seconds from the Date
    this.second = second < 10 ? '0' + second : second.toString();

    const days = date.getDate(); // get the month from the date

    this.Date = days < 10 ? '0' + days : days.toString();

    const month = date.getMonth() + 1; // get the month from the date
    this.month = month < 10 ? '0' + month : month.toString();

    this.year = date.getFullYear();
  }


  private commonTime(date: Date) {

      const hours = date.getHours(); //get the hours from the Date


      this.ampm = hours >= 12 ? 'PM' : 'AM'; // ternry condition which check that time is greater than 12 then condition true hour becoome (PM)
      this.hour=this.hour> 12 ?hours%12:hours; // if time is greater than 12 then take modulus and remaing answe will be in 12 hour formate
      this.hour = this.hour < 10 ? '0' + hours : hours; // if the hour is single digit, then add 0 to the hour

    const minutes = date.getMinutes(); //get the minutes from the Date
    this.minute = minutes < 10 ? '0' + minutes : minutes.toString();

    const second = date.getSeconds(); //get the seconds from the Date
    this.second = second < 10 ? '0' + second : second.toString();

    const days = date.getDate(); // get the month from the date

    this.Date = days < 10 ? '0' + days : days.toString();

    const month = date.getMonth() + 1; // get the month from the date
    this.month = month < 10 ? '0' + month : month.toString();

    this.year = date.getFullYear();
  }


  }

  //document.getElementById('digitalTime').innerHTML =

