import { Component, OnInit } from '@angular/core';
import { Classes } from '../models/classes';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  classes: Classes[] = [
    {full_name:"Intro to Digital Logic Design", abbr_name:"EECS 140", semester:["fall", "spring"]},
    {full_name:"Programming I", abbr_name:"EECS 168", semester:["fall", "spring"]},
  ]

  ngOnInit(): void {
  }

}
