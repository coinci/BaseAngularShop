import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.checkAction();
  }

  checkAction() {
    let obj = {a:1,b:2,c:null};
    let t1 = true;
    let t1_ex = {
      // ...obj.c && {k: obj.c},
      ...t1 && {d:"check"}
    }
    console.log(`t1 is ${t1}, after ... is `);
    console.dir(t1_ex);
  }

}
