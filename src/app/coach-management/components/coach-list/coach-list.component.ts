import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Coach } from '../../models/models';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-coach-list',
  templateUrl: './coach-list.component.html',
  styleUrls: ['./coach-list.component.scss']
})
export class CoachListComponent implements OnInit,OnChanges{

 
  @Input() page:any;
  @Input() listCoach:Coach[] | undefined | null;
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
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    

    dialogRef.afterClosed().subscribe((confirm: boolean) => {
      this.confirmDelete.emit(idDelete);
    });


  }


  openEditDialog(coach: any){
    this.openDialog.emit({
      type: 'update',
      coach: coach
    })
  }

}
