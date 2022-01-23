import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
})
export class CalenderComponent implements OnInit {
  Calender: Array<any> | undefined;

  thisDay: any;
  isOpen = false;
  Months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  thisMonth = +formatDate(new Date(), 'MM', 'en-US');
  SelectedMonth = this.monthNames[+formatDate(new Date(), 'MM', 'en-US') - 1];
  currentDate = formatDate(new Date(), 'dd/MM/YYYY', 'en-US');
  numberOfDayPerMonth = 0;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.calenderSetup();
    this.scrollToCurrentDate();
  }
  openCalender() {
    this.isOpen = !this.isOpen;
  }
  scrollToCurrentDate() {
    const index = this.Calender?.findIndex((i) => i.date === this.currentDate);

    setTimeout(() => {
      if (index && index > -1) {
        document.getElementById(`${index}`)?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
      }
    }, 1000);
  }
  changeMonth(month: number) {
    this.thisMonth = 0 + month;
    this.isOpen = false;
    this.calenderSetup();
    this.SelectedMonth = this.monthNames[month - 1];
    let thismonth = '0' + month + '';
    if (thismonth === formatDate(new Date(), 'MM', 'en-US')) {
      this.scrollToCurrentDate();
    }
  }
  calenderSetup() {
    let monthDays = [];
    let day = formatDate(new Date(), 'dd', 'en-us');
    this.thisDay = day;
    this.numberOfDayPerMonth = new Date(2022, this.thisMonth, 0).getDate();
    for (let i = 1; i <= this.numberOfDayPerMonth; i++) {
      let weekday = formatDate(
        '2022-' + this.thisMonth + '-' + i,
        'EEE',
        'en-US'
      );
      let date = formatDate(
        '2022-' + this.thisMonth + '-' + i,
        'dd/MM/YYYY',
        'en-US'
      );
      monthDays.push({ day: i, week: weekday, isTask: false, date: date });
    }
    this.Calender = monthDays;
  }
}
