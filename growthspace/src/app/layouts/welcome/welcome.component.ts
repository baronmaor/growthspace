import { Component, OnInit,ViewChild,ViewChildren } from '@angular/core';
import { ContentService } from './content.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {

  constructor(public HTMLcontent: ContentService, private api: ApiService,private activatedRoute: ActivatedRoute) {}
  selectionBox = this.HTMLcontent.selectionBox;
  content = this.HTMLcontent.content;
  phoneNumber = '^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[ \s\./0-9]*$';
  profileForm = new FormGroup({
    ocupation: new FormControl('', Validators.required),
    amountOfYears: new FormControl('', Validators.required),
    amountOfEmployees: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.pattern(this.phoneNumber)]),
  });
  ngOnInit(): void {
    // checking if params in request
    if (this.activatedRoute.snapshot.paramMap.get('userId')){ 
      this.api.getUser(444).subscribe(res => {
        this.fp.phone.setValue(res.phone);
        this.fp.ocupation.setValue(res.occupationCode);
        this.fp.amountOfEmployees.setValue(res.amountOfEmployees);
        this.fp.amountOfYears.setValue(res.amountOfYears);
        this.content.employeesAmount.forEach( e => e.txt === res.amountOfEmployees ? e.active = 1 : -1 );
        this.content.organizationYears.forEach( e => e.txt === res.amountOfYears ? e.active = 1 : -1 );
        this.selectionBox.forEach( e => e.occupationCode === res.occupationCode ? e.active = 1 : -1 );
      });
    }
  }

  positionChange(stat): void{
    this.selectionBox.forEach(select => select.active = -1);
    stat.active = 1;
    this.fp.ocupation.setValue(stat.occupationCode);
  }
  employeeChange(stat): void{
    this.content.employeesAmount.forEach(select => select.active = -1);
    stat.active = 1;
    this.fp.amountOfEmployees.setValue(stat.txt);
  }

  yearsChange(stat): void{
    this.content.organizationYears.forEach(select => select.active = -1);
    stat.active = 1;
    this.fp.amountOfYears.setValue(stat.txt);
  }
  submit(form): void {
    console.log(form);
  }

  get fp() { return this.profileForm.controls; }

}
