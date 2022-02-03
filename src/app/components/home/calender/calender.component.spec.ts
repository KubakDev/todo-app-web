
import { formatDate } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderComponent } from './calender.component';

describe('CalenderComponent', () => {
  let component: CalenderComponent;
  let fixture: ComponentFixture<CalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalenderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('open Calender', () => {
    component.isOpen = false;
    component.openCalender();
    expect(component.isOpen).toBe(true)
  })
  it('close Calender', () => {
    component.isOpen = true;
    component.openCalender();
    expect(component.isOpen).toBe(false)
  })
  it('increase year', () => {
    component.currentYear = 2022;
    component.changeYear('add');
    expect(component.currentYear).toBe(2023)
  })
  it('decrease year', () => {
    component.currentYear = 2022;
    component.changeYear('sub');
    expect(component.currentYear).toBe(2021)
  })
  it('current day befor changing it', () => {
    expect(component.currentDate).toBe(formatDate(new Date(), 'dd/MM/YYYY', 'en-US'))
  })
  it('current day after changing it', () => {
    component.changeActiveDay({
      day: 4,
      week: "mon",
      date: new Date(),
      selectedDate: '22-2-2022'
    });
    expect(component.currentDate).toBe('22-2-2022')
  })
  it('current month before change it', () => {
    expect(component.thisMonth).toBe(+formatDate(new Date(), 'MM', 'en-US'))
  })
  it('current month after chaning it', () => {
    component.changeMonth(2);
    expect(component.thisMonth).toBe(2)
  })
});
