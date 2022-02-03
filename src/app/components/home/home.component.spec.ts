import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Todo } from 'src/app/backend/models';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('secound click true', () => {
    component.getMontheTasks({ day: new Date(), secoundClick: true });
    expect(component.secoundClick).toBe(true)
  })
  it('secound click false', () => {
    component.getMontheTasks({ day: new Date(), secoundClick: false });
    expect(component.secoundClick).toBe(false)
  })
  it('date work fine', () => {
    component.getMontheTasks({ day: new Date(), secoundClick: true });
    expect(component.date).toEqual(new Date())
  })
  it('get task on select', () => {
    let task: Todo = { date: '22/1/2022', id: "1", isComplete: false, note: "test", title: "test", userId: "1" }
    component.onTaskSelected({ task })
    expect(component.task).toEqual(task)
  })
});
