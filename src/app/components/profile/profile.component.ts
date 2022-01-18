import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  editMode?: boolean = false;

  user:
    | {
        email: string;
        name: string;
        nickname: string;
        picture: string;
      }
    | undefined;
  constructor(private authService: AuthService) {}

  async ngOnInit(): Promise<void> {
    this.authService.user$.subscribe((u) => {
      this.user = {
        email: u?.email ?? '',
        name: u?.name ?? '',
        nickname: u?.nickname ?? '',
        picture: u?.picture ?? '',
      };
    });
  }

  onEdit() {
    this.editMode = !this.editMode;
  }
}