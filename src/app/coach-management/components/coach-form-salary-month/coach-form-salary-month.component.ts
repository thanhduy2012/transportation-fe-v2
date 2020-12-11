import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SalaryCoachDTO } from '../../models/models';

@Component({
  selector: 'app-coach-form-salary-month',
  templateUrl: './coach-form-salary-month.component.html',
  styleUrls: ['./coach-form-salary-month.component.scss']
})
export class CoachFormSalaryMonthComponent implements OnInit {

  @Input() salaryCoach: SalaryCoachDTO | any;
  @Output() searchForm = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group(
      {
        fromDate: [""],
        toDate: [""]
      }

    );
  }

  ngOnInit(): void {
  }


  save(form: FormGroup) {

    const { valid, value } = form;
    if (valid) {
      const coach: any = {
        fromDate: value.fromDate,
        toDate: value.toDate,

      }

      this.searchForm.emit(coach);

    }

  }
}
