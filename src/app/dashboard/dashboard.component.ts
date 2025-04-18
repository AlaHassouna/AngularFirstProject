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
  nbSousse:number=0;
  nbSfax:number=0;
  nbTunis:number=0;
  tab_m:string[]=[];
  nbEvtBYM:number[]=[];
  tab:string[]=[];
  tab2:string[]=[];
  nbType:number[]=[];


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

  chartDatad: ChartDataset[] =[];
  chartLabelsd: string[] = ['Sousse','Sfax','Tunis'];
  chartOptionsd: ChartOptions = {};


  chartDataLine: ChartDataset[] =[];;
  chartLabelsLine: string[] = [];

  chartDataBar: ChartDataset[] =[];;
  chartLabelsBar: string[] = [];
  constructor(private Ms:MemberService,private Es:EventService,private Ps:PubService){
    this.Ms.GetAllMembers().subscribe((rep)=>{

      this.Nb_Members=rep.length;
      for(let i=0;i<this.Nb_Members;i++){
        this.tab_m.push(rep[i].name);
        this.nbEvtBYM.push(rep[i].tab_evt.length);

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
      this.chartLabelsLine=this.tab_m;
      console.log("this.nbEvtBYM",this.nbEvtBYM);
      this.chartDataLine=[{
        label:"EbEventBy Member",
        data:this.nbEvtBYM
      }];
    })
    this.Es.GetAllEvent().subscribe((rep:any)=>{
      this.Nb_Events=rep.length;
    })
    this.Ps.getAllArticles().subscribe((rep)=>{
      this.Nb_Articles=rep.length;
      // for(let i=0;i<this.Nb_Articles;i++){
      //   this.tab.push(rep[i].type);
      // }
      // console.log(this.tab);
      // this.tab2=[...new Set(this.tab)]
      this.tab2=[...new Set(rep.map(m=>m.type))]
      console.log(this.tab2);

      for(const lieu of this.tab2){
        const count=rep.filter(m=>m.type===lieu);
        this.nbType.push(count.length);
        
      }
      this.chartLabelsBar=this.tab2;
      this.chartDataBar=[
        {
          // ⤵️ Add these
          label:"Nb Type",
          data: this.nbType
        }]
    })


    this.Es.GetAllEvent().subscribe((res:any)=>{
      this.Nb_Events=res.length
      for(let i=0;i<this.Nb_Events;i++){
        if(res[i].lieu=="Sfax") this.nbSfax++;
        else if(res[i].lieu=="Tunis") this.nbTunis++;
        else this.nbSousse++;
      }
      this.chartDatad=[
        {
          // ⤵️ Add these
          data: [ this.nbSousse, this.nbSfax, this.nbTunis]
        }]
    })

   
    
  
  

}}
