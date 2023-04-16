import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {

  constructor(private http: HttpClient) { }



  public schools: School[] = [];
  public majors: Major[] = [];
  public minors: Major[] = [];

  ngOnInit(): void {
    this.http.get('https://courseflo-1.uc.r.appspot.com/api/schools',
      {headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}}
    ).subscribe((data: any) => {
      this.schools = data;
    });
    // this.schools = this.schools;
  }

  public getMajors(id: String){
    this.http.get('https://courseflo-1.uc.r.appspot.com/api/schools/' + id + '/majors',
      {headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}}
    ).subscribe((data: any) => {
      this.majors = data;
    });
    this.http.get('https://courseflo-1.uc.r.appspot.com/api/schools/' + id + '/minors',
      {headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}}
    ).subscribe((data: any) => {
      this.minors = data;
    });
  }

}

class School {
  name!: string;
  id!: Number;
}
class Major {
  class_ids!: Number[];
  group_ids!: Number[];
  id!: Number;
  name!: string;
  school!: Number;
  type!: string;
}
