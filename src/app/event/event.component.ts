import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Evt } from 'src/Modeles/Evt';
import { EventService } from 'src/Services/event.service';
import { ModalEvtComponent } from '../modal-evt/modal-evt.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmeDialogComponent } from '../confirme-dialog/confirme-dialog.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit,AfterViewInit{
  constructor(private ES:EventService,private dialog:MatDialog){
    
  }
  dataSource: MatTableDataSource<Evt>= new MatTableDataSource<Evt>(); 
  displayedColumns: string[] = ['id', 'title', 'dateDebut', 'dateFin', 'lieu','action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(){
    this.fetchData()
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  fetchData():void{
      this.ES.GetAllEvent().subscribe((data)=>{
        this.dataSource.data = data;
      })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  open():void{
    let dialogRef = this.dialog.open(ModalEvtComponent, {
          height: '500px',
          width: '300px',
        });
        dialogRef.afterClosed().subscribe(result => {
          
            // this.MS.deleteMemberById(memberId).subscribe(()=>{
          
            //   this.MS.GetAllMembers().subscribe((a)=>{
            //     this.dataSource=a
            //   })
               
            // });
            if(result){
            console.log("Dialog result:",result); 
            this.ES.addEvent(result).subscribe(()=>{
          
              this.fetchData()
                 
              });
            }
          
        });
  }

  openedit(id:string){
    const dialogConfig = new MatDialogConfig();
    this.ES.getEventById(id).subscribe((evtRecupere)=>{
      // envoyer evtRecupere vers la boite
      
      dialogConfig.data =evtRecupere
      let dialogRef=this.dialog.open(ModalEvtComponent, dialogConfig);
      // console.log("evtRecupere",evtRecupere)
      dialogRef.afterClosed().subscribe((data)=>{
        if(data){
          this.ES.updateEvent(id,data).subscribe(()=>{
            this.fetchData();
          })
        }
        
      
      })
    })
  }
  openedelete(id:string){
    let dialogRef = this.dialog.open(ConfirmeDialogComponent, {
          height: '200px',
          width: '300px',
        });
        dialogRef.afterClosed().subscribe(result => {
          if(result){
            this.ES.deleteEventById(id).subscribe(()=>{
          
              this.fetchData()

               
            });
          }
          console.log(`Dialog result: ${result}`); 
        });
  }
}
