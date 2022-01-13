import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  UserName:string | undefined;
  unfinishedTasks:number=0;
  test:string="test";

  constructor() { }

  ngOnInit(): void {
    this.UserName="Przha"
    this.unfinishedTasks=4;
  }

}
