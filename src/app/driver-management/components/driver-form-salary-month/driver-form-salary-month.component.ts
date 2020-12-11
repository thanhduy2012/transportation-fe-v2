import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SalaryDriverDTO } from '../../models/model';

@Component({
  selector: 'app-driver-form-salary-month',
  templateUrl: './driver-form-salary-month.component.html',
  styleUrls: ['./driver-form-salary-month.component.scss']
})
export class DriverFormSalaryMonthComponent implements OnInit {


  @Output() change = new EventEmitter<any>();

  @Input() salaryDriver: SalaryDriverDTO | any;


  constructor() { }

  ngOnInit(): void {
  }


  changeMonth($event: any){
    console.log("event" , $event.target.value);
    this.change.emit($event.target.value);

  }

}
