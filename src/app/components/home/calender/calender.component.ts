import { formatDate } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/todo.service';
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
})
export class CalenderComponent implements OnInit {
  @Output() getMontheTasks = new EventEmitter<any>();
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
  current = +formatDate(new Date(), 'MM', 'en-US');
  currentYear = 2022;
  SelectedMonth = this.monthNames[+formatDate(new Date(), 'MM', 'en-US') - 1];
  currentDate = formatDate(new Date(), 'dd/MM/YYYY', 'en-US');
  numberOfDayPerMonth = 0
  ischangeMonth: boolean = false;
  constructor(private taskService: TodoService) {}

  ngOnInit(): void {
    this.calenderSetup();
    this.scrollToCurrentDate();
  }
  openCalender() {
    this.isOpen = !this.isOpen;
  }
  scrollToCurrentDate(index?: number) {
    if (
      index == undefined &&
      this.thisMonth == +formatDate(new Date(), 'MM', 'en-US')
    ) {
      index = this.Calender?.findIndex(
        (i) => i.selectedDate === this.currentDate
      );
    }
    setTimeout(() => {
      if (index && index > -1) {
        document.getElementById(`${index}`)?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
      } else {
        document.getElementById(`${0}`)?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
      }
    }, 1000);
  }
  changeMonth(month: number) {
    this.thisMonth = month;
    this.isOpen = false;
    this.calenderSetup();
    this.SelectedMonth = this.monthNames[month - 1];
    let thismonth = month + '';
    if (thismonth === formatDate(new Date(), 'MM', 'en-US')) {
      this.scrollToCurrentDate(0);
    }
    let date = new Date(`${this.currentYear}-${this.thisMonth}-${1}`);
    this.currentDate = formatDate(date, 'dd/MM/YYYY', 'en-US');

    this.getMontheTasks.emit({ day: date });

    this.scrollToCurrentDate();
  }

  calenderSetup() {
    let monthDays = [];
    let day = formatDate(new Date(), 'dd', 'en-us');
    this.thisDay = day;
    this.numberOfDayPerMonth = new Date(
      this.currentYear,
      this.thisMonth,
      0
    ).getDate();
    for (let i = 1; i <= this.numberOfDayPerMonth; i++) {
      let weekday = formatDate(
        this.currentYear + '-' + this.thisMonth + '-' + i,
        'EEE',
        'en-US'
      );
      let date = new Date(`${this.currentYear}-${this.thisMonth}-${i}`);

      let selectedDate = formatDate(
        this.currentYear + '-' + this.thisMonth + '-' + i,
        'dd/MM/YYYY',
        'en-US'
      );
      monthDays.push({
        day: i,
        week: weekday,
        isTask: false,
        date: date,
        selectedDate: selectedDate,
      });
    }
    this.Calender = monthDays;
  }

  onWheel(event: WheelEvent): void {
    event.preventDefault();
    if (event.deltaY > 0)
      document.getElementById('container')!.scrollLeft += 400;
    else document.getElementById('container')!.scrollLeft -= 400;
  changeYear(condition: string) {
    if (condition == 'add') this.currentYear++;
    if (condition == 'sub') this.currentYear--;
  }

  changeAchtiveMonth(day: any) {
    this.currentDate = day.selectedDate;
    this.getMontheTasks.emit({ day: day.date });
  }
}
