import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  editMode?: boolean = false;

  constructor() {}

  onEdit() {
    this.editMode = !this.editMode;
  }
}
