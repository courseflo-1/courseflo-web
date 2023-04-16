import { Component, OnInit } from '@angular/core';
import { Classes } from '../models/classes';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  faInfoCircle = faInfoCircle;

  constructor(private http: HttpClient, private route: ActivatedRoute, private spinner: NgxSpinnerService) { }

  // classes: Classes[] = [
  //   {full_name:"Intro to Digital Logic Design", abbr_name:"EECS 140", semester:["fall", "spring"]},
  //   {full_name:"Programming I", abbr_name:"EECS 168", semester:["fall", "spring"]},
  // ]
  public classes: Classes[] = [];
  public semesters: any[] = [[],[],[],[],[],[],[],[]];
  public page = 0;

  ngOnInit(): void {
    this.spinner.show();
    // var classes = this.http.get('https://courseflo-1.uc.r.appspot.com/api/schedule/' + school + '/' + major);
    this.route.paramMap.subscribe(params => {
      // console.log(params.get('id'));
      // console.log(params.get('id2'));
      this.http.get('https://courseflo-1.uc.r.appspot.com/api/schedule/' + params.get('id') + '/' + params.get('id2'),
        { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
      ).subscribe((data: any) => {
        this.classes = data;
        this.classes.forEach((item) => {
          this.semesters[item.semester].push(item);
        });
        this.spinner.hide();
        // console.log(this.classes);
      });
    });
  }

  public decrementPage(){
    if(this.page > 0){
      this.page-=1;
    }
  }

  public incrementPage(){
    if(this.page < 3){
      this.page+=1;
    }
  }

}
