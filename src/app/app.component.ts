import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  collapedSideBar: boolean | undefined;

  constructor() {}

  ngOnInit() {}

  receiveCollapsed($event: boolean | undefined) {
      this.collapedSideBar = $event;
  }
}
