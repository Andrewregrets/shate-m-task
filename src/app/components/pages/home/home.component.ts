import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  greeting: string =
    'Привет. В этом приложении вы можете управлять своими ежедневными задачами.';

  constructor() {}

  ngOnInit() {}
}
