import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people:any;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {

    this.httpService.getPeopleList().subscribe((res:any) => {
      this.people = res.results;
      console.log(this.people);
   });

  }

}
