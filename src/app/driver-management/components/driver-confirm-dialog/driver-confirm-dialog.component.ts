import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/coach-management/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-driver-confirm-dialog',
  templateUrl: './driver-confirm-dialog.component.html',
  styleUrls: ['./driver-confirm-dialog.component.scss']
})
export class DriverConfirmDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ConfirmDialogComponent>) { }

  ngOnInit(): void {
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }

}
