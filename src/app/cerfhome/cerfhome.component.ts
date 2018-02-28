import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cerfhome',
  templateUrl: './cerfhome.component.html',
  styleUrls: ['./cerfhome.component.scss']
})
export class CerfhomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoLogin() {
    this.router.navigate(['/']);
  }
  loadFldExnrhm() {
    this.router.navigate(['/fldview']);
  }
  loadFieldExaminerHome() {
    this.router.navigate(['/fldhome']);
  }
}
