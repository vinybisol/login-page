import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  //public
  public title: string = 'Login';

  constructor(private readonly _titleService: Title) {}

  ngOnInit(): void {
    this._titleService.setTitle(this.title);
  }
}
