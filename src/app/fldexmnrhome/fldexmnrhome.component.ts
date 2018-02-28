import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fldexmnrhome',
  templateUrl: './fldexmnrhome.component.html',
  styleUrls: ['./fldexmnrhome.component.scss']
})
export class FldexmnrhomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoLogin() {
    this.router.navigate(['/']);
  }
  loadDashBoard() {
    this.router.navigate(['/cerfhome']);
  }
}
