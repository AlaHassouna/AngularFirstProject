import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table'; // Import MatTableDataSource
import { Pub } from 'src/Modeles/Pub';
import { PubService } from 'src/Services/pub.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  // Déclaration de dataSource en tant que MatTableDataSource
  dataSource: MatTableDataSource<Pub> = new MatTableDataSource<Pub>();
  // ou 
  // dataSource !: MatTableDataSource<Pub>

  // Colonnes à afficher dans le tableau
  displayedColumns: string[] = ['type', 'titre', 'lien', 'date', 'Sourcepdf','action'];

  constructor(private PS: PubService,private dialog:MatDialog) {}

  // Méthode pour récupérer les données
  fetch() {
    this.PS.getAllArticles().subscribe((data) => {
      // Mettre à jour la source de données du tableau
      this.dataSource.data = data;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  // Initialisation du composant
  ngOnInit() {
    this.fetch();
  }

  // open():void{
  //     let dialogRef = this.dialog.open(ModalEvtComponent, {
  //           height: '500px',
  //           width: '300px',
  //         });
  //         dialogRef.afterClosed().subscribe(result => {
            
  //             // this.MS.deleteMemberById(memberId).subscribe(()=>{
            
  //             //   this.MS.GetAllMembers().subscribe((a)=>{
  //             //     this.dataSource=a
  //             //   })
                 
  //             // });
  //             if(result){
  //             console.log("Dialog result:",result); 
  //             this.PS.addPub(result).subscribe(()=>{
            
  //               this.fetch()
                   
  //               });
  //             }
            
  //         });
  //   }
}