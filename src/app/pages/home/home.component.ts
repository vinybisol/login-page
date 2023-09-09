import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  //public
  public title: string = 'Home page';

  constructor(private readonly _titleService: Title) {}

  ngOnInit(): void {
    this._titleService.setTitle(this.title);
  }
}
