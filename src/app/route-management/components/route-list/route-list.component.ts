import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Route } from '../../models/model';
import { RouteConfirmDialogComponent } from '../route-confirm-dialog/route-confirm-dialog.component';

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.scss']
})
export class RouteListComponent implements OnInit {

  @Input() page:any;
  @Input() listRoute:Route[] | undefined | null;
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
    const dialogRef = this.dialog.open(RouteConfirmDialogComponent);
    

    dialogRef.afterClosed().subscribe((confirm: boolean) => {
      this.confirmDelete.emit(idDelete);
    });


  }


  openEditDialog(Route: any){
    this.openDialog.emit({
      type: 'update',
      route: Route
    })
  }


}
