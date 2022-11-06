import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private readonly _router: Router) {}

  ngOnInit(): void {}

  irPara() {
    this._router.navigate(['ecommerce']);
  }
}
