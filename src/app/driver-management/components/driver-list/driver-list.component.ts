import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Driver } from '../../models/model';
import { DriverConfirmDialogComponent } from '../driver-confirm-dialog/driver-confirm-dialog.component';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss']
})
export class DriverListComponent implements OnInit {

  @Input() page:any;
  @Input() listDriver:Driver[] | undefined | null;
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

  openViewSalaryDialog(item:any){
    this.openDialog.emit({
      type: 'view',
      driver: item
    })
  }

  openAddDialog(){
    this.openDialog.emit({
      type: 'create'
    })
  }

  openConfirmDialog(idDelete: any){
    const dialogRef = this.dialog.open(DriverConfirmDialogComponent);
    

    dialogRef.afterClosed().subscribe((confirm: boolean) => {
      this.confirmDelete.emit(idDelete);
    });


  }


  openEditDialog(Driver: any){
    this.openDialog.emit({
      type: 'update',
      driver: Driver
    })
  }


}
