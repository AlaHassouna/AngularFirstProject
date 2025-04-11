import { Component } from '@angular/core';
import { EventService } from 'src/Services/event.service';
import { MemberService } from 'src/Services/member.service';
import { PubService } from 'src/Services/pub.service';
import {ChartDataset, ChartOptions} from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  Nb_Members:number=0;
  Nb_Articles:number=0;
  Nb_Events:number=0;
  Nb_Tools:number=0;
  Nb_Teacher:number=0;
  Nb_Student:number=0;

  
  chartData: ChartDataset[] = [
    {
      // ⤵️ Add these
      label: '$ in millions',
      data: [ 1551, 1688, 1800, 1895, 2124, 2124 ]
    }
  ];
  chartLabels: string[] = ["A","B","C","D","E","F"];
  chartOptions: ChartOptions = {};


  chartDataPie: ChartDataset[] =[];
  chartLabelsPie: string[] = ["Teacher","Student"];
  chartOptionsPie: ChartOptions = {};



  constructor(private Ms:MemberService,private Ev:EventService,private Ps:PubService){
    this.Ms.GetAllMembers().subscribe((rep)=>{
      this.Nb_Members=rep.length;
      for(let i=0;i<this.Nb_Members;i++){
        if(rep[i].type=="teacher"){
          this.Nb_Teacher++;
        }else{
          this.Nb_Student++;

        }
      }
      this.chartDataPie=[
      {
        // ⤵️ Add these
        data: [ this.Nb_Teacher, this.Nb_Student]
      }]
    })
    this.Ev.GetAllEvent().subscribe((rep)=>{
      this.Nb_Events=rep.length;
    })
    this.Ps.getAllArticles().subscribe((rep)=>{
      this.Nb_Articles=rep.length;
    })
    
  }
}
