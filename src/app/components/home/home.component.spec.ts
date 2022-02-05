import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Todo } from 'src/app/backend/models';
import { ProfileComponent } from '../profile/profile.component';
import { CalenderComponent } from './calender/calender.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { HeaderComponent } from './header/header.component';

import { HomeComponent } from './home.component';
import { TodayTasksComponent } from './today-tasks/today-tasks.component';

@Component({
  selector: 'app-header',
  template: '<p>Mock Product Editor Component</p>'
})
class MockHeaderComponent {
}
@Component({
  selector: 'app-calender',
  template: '<p>Mock Product Editor Component</p>'
})
class MockCalenderComponent {

}
@Component({
  selector: 'app-today-tasks',
  template: '<p>Mock Product Editor Component</p>'
})
class MockTodayTasksComponent {
  @Input() secoundClick: boolean = false;
  @Input() date: Date | undefined;

}
@Component({
  selector: 'app-create-task',
  template: '<p>Mock Product Editor Component</p>'
})
class MockCreateTaskComponent {
  @Input() index = 0;

  @Input() editTask: Todo | undefined;;
}
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, MockHeaderComponent, MockCalenderComponent, MockTodayTasksComponent, MockCreateTaskComponent],
      imports: [
        CommonModule,

      ]

    })
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
