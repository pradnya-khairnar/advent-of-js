import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'advent-of-js';
  timerMode = false;
  intervalId: any;
  min: number = 0;
  sec: number = 4;
  @ViewChild('f', { static: false }) timeForm: NgForm;

  constructor() {}
  ngOnInit() {}

  onSubmit() {
    this.min = this.timeForm.value.min;
    this.sec = this.timeForm.value.sec;
    this.timerMode = !this.timerMode;
    if (this.timerMode) {
      this.intervalId = setInterval(() => {
        console.log('this is sec', this.sec);
        this.sec = this.sec > 0 ? this.sec - 1 : this.sec;
        if (this.min === 0 && this.sec === 0) {
          console.log('I am here');
          clearInterval(this.intervalId);
          setTimeout(() => {
            alert('timer elapsed');
          }, 0);
        } else if (this.sec === 0 && this.min > 0) {
          this.min--;
          this.sec = 60;
        } else if (this.min >= 0) {
          this.min;
        } else if (this.min === 0) {
          this.min = 0;
          this.sec = 0;
        }

        console.log('timer ', this.min, this.sec);
      }, 1000);
    } else {
      clearInterval(this.intervalId);
      console.log('timer paused', this.timerMode);
    }
  }

  // startTimer() {
  //   this.timerMode = !this.timerMode;
  //   if (this.timerMode) {
  //     this.intervalId = setInterval(() => {
  //       this.count++;
  //       console.log('count ', this.count, this.timerMode);
  //     }, 1000);
  //   } else {
  //     clearInterval(this.intervalId);
  //     console.log('timer paused', this.timerMode);
  //   }
  // }
}
