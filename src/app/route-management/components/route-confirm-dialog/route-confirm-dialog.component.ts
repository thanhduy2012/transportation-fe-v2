import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-route-confirm-dialog',
  templateUrl: './route-confirm-dialog.component.html',
  styleUrls: ['./route-confirm-dialog.component.scss']
})
export class RouteConfirmDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<RouteConfirmDialogComponent>) { }

  ngOnInit(): void {
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }

}
