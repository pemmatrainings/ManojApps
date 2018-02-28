import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fldexmnrview',
  templateUrl: './fldexmnrview.component.html',
  styleUrls: ['./fldexmnrview.component.scss']
})
export class FldexmnrviewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loadDashBoard() {
    this.router.navigate(['/cerfhome']);
  }

  gotoLogin() {
    this.router.navigate(['/']);
  }

}
