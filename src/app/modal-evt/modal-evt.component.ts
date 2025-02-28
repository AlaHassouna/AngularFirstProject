import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-evt',
  templateUrl: './modal-evt.component.html',
  styleUrls: ['./modal-evt.component.css']
})
export class ModalEvtComponent implements OnInit{
  //forcage de type => Boite
  constructor(public dialogRef: MatDialogRef<ModalEvtComponent>,@Inject(MAT_DIALOG_DATA) data:any){
    console.log("dataRecu",data)
    if(data){
      this.form = new FormGroup({
        title: new FormControl(data.title),
        dateDebut: new FormControl(data.dateDebut),
        dateFin: new FormControl(data.dateFin),
        lieu: new FormControl(data.lieu)
      });
    }else{
      this.form = new FormGroup({
        title: new FormControl(null),
        dateDebut: new FormControl(null),
        dateFin: new FormControl(null),
        lieu: new FormControl(null)
      });
    }
  }
  //declarage form    
  form!:FormGroup;

  //initialiser form
ngOnInit(){
  // Initialiser le formulaire
  
  
  
}
save() {
  this.dialogRef.close(this.form.value);
}

close() {
  this.dialogRef.close();
}

}
