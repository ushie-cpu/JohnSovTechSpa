import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  category: string[] = [];

  constructor(private httpService: HttpService  ) {  }

  ngOnInit(): void {
   this.httpService.getCategoryList().subscribe((res:string[]) => {
      this.category = res;
   });
  }

}
