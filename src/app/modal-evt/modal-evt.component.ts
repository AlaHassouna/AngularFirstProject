import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-evt',
  templateUrl: './modal-evt.component.html',
  styleUrls: ['./modal-evt.component.css']
})
export class ModalEvtComponent implements OnInit{
  //forcage de type => Boite
  constructor(public dialogRef: MatDialogRef<ModalEvtComponent>){}
  //declarage form    
  form!:FormGroup;

  //initialiser form
ngOnInit(){
  // Initialiser le formulaire
  this.form = new FormGroup({
    title: new FormControl(null),
    dateDebut: new FormControl(null),
    dateFin: new FormControl(null),
    lieu: new FormControl(null)
  });
}
save() {
  this.dialogRef.close(this.form.value);
}

close() {
  this.dialogRef.close();
}

}
