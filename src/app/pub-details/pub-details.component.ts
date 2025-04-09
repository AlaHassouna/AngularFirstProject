import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pub-details',
  templateUrl: './pub-details.component.html',
  styleUrls: ['./pub-details.component.css']
})
export class PubDetailsComponent {
// forcage de type => Modal
  constructor(public dialogRef: MatDialogRef<PubDetailsComponent>) { }

// reception  des donnes (@inject)

// id => getPubById()

}
