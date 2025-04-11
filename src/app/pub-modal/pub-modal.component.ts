import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-pub-modal',
  templateUrl: './pub-modal.component.html',
  styleUrls: ['./pub-modal.component.css']
})
export class PubModalComponent {
  selectedValue!: string;
  constructor(public dialogRef: MatDialogRef<PubModalComponent>){
    this.form = new FormGroup({
            titre: new FormControl(null),
            lien: new FormControl(null),
            Type: new FormControl(null),
            Date: new FormControl(null),
            Sourcepdf: new FormControl(null),
          });
  }
  foods: Food[] = [
    {value: 'Conf', viewValue: 'Conf'},
    {value: 'Journal', viewValue: 'Journal'},
    {value: 'Workshop', viewValue: 'Workshop'},
  ];
  form!:FormGroup;
  
  save() {
    this.dialogRef.close(this.form.value);
  }
  
  close() {
    this.dialogRef.close();
  }
}
