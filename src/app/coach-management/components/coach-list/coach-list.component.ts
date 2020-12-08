import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coach-list',
  templateUrl: './coach-list.component.html',
  styleUrls: ['./coach-list.component.scss']
})
export class CoachListComponent implements OnInit {

  currentPage:number | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  goToPage(pageNumber : any){
    this.currentPage = pageNumber;
  }

}
