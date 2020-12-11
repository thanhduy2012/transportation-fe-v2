import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Trip } from '../../models/model';
import { TripConfirmDialogComponent } from '../trip-confirm-dialog/trip-confirm-dialog.component';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {
  @Input() page:any;
  @Input() listTrip:Trip[] |any;
  @Output() changePage = new EventEmitter<Number>();
  @Output() openDialog= new EventEmitter<any>();
  @Output() confirmDelete = new EventEmitter<Number>();


  currentPage:number = 0;




  constructor(private dialog: MatDialog
    ) { }

    
  ngOnChanges(changes: SimpleChanges): void {
    if(this.page != null && this.page != undefined) 
    this.currentPage = this.page.currentPage;
  }
  
  ngOnInit(): void {
  }

  goToPage(pageNumber : number){
    
    this.changePage.emit(pageNumber);
  }

  openAddDialog(){
    this.openDialog.emit({
      type: 'create'
    })
  }

  openConfirmDialog(idDelete: any){
    console.log("id trip : ", idDelete)
    const dialogRef = this.dialog.open(TripConfirmDialogComponent);
    

    dialogRef.afterClosed().subscribe((confirm: boolean) => {
      this.confirmDelete.emit(idDelete);
    });


  }


  openEditDialog(Trip: any){
    this.openDialog.emit({
      type: 'update',
      Trip: Trip
    })
  }


}
