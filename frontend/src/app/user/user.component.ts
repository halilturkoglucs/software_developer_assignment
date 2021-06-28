import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {TokenStorageService} from "../_services/token-storage.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  content?: string;
  authorizedToApprove: boolean = false;

  constructor(private userService: UserService,
              private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.authorizedToApprove = this.tokenStorageService.authorizedToApprove();

    this.userService.getUserContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
