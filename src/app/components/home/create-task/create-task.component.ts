import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {
  public innerWidth: any;
  startAdding: boolean = false;
  constructor() {
    console.log(this.innerWidth);
  }
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  onClickInput() {
    this.startAdding = true;
  }
  onSubmit() {
    console.log('yes');
  }
}
