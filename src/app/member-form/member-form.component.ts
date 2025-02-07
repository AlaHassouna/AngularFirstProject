import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit{
  form!:FormGroup
  ngOnInit(){
    this.form=new FormGroup({
        cin: new FormControl(null),
        name: new FormControl(null),
        type: new FormControl(null),
        createdDate:new FormControl(null)
    })
  }
  onSub():void{
    console.log(this.form.value)
  }
}
