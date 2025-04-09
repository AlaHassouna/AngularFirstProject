import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: ' app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  constructor(private route:Router){}
  title = 'FirstApp';
  isLogin:boolean=false;
  ngOnInit(){
    this.route.events.subscribe(()=>{
      this.isLogin=this.route.url.includes("/login");
      console.log('isLogin',this.isLogin)
    })
  }
}
