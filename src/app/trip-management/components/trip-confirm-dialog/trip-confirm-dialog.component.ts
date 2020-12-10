import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-trip-confirm-dialog',
  templateUrl: './trip-confirm-dialog.component.html',
  styleUrls: ['./trip-confirm-dialog.component.scss']
})
export class TripConfirmDialogComponent implements OnInit {

constructor( public dialogRef: MatDialogRef<TripConfirmDialogComponent>) { }

  ngOnInit(): void {
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }


}
