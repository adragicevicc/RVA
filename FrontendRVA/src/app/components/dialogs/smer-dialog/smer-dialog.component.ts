import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Smer } from 'src/app/models/smer';
import { SmerService } from 'src/app/services/smer.service';

@Component({
  selector: 'app-smer-dialog',
  templateUrl: './smer-dialog.component.html',
  styleUrls: ['./smer-dialog.component.css']
})
export class SmerDialogComponent implements OnInit {

  public flag: number;
  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<SmerDialogComponent>,
              @Inject (MAT_DIALOG_DATA) public data: Smer,
              public smerService:
              SmerService) { }

  ngOnInit(): void {
  }

  public add(): void {
    this.smerService.addSmer(this.data)
    .subscribe(date => { //sta ce se desiti ako je uspesno dodat
      this.snackBar.open('Uspesno dodat projekat: ' + this.data.naziv, 'U redu', {
        duration: 2500
      })
    }),
    (error: Error) => {
      console.log(error.name + '-->' + error.message)
      this.snackBar.open('Dogodila se greska. Pokusajte ponovo!', 'Zatvori', {
        duration: 2500
      })
    };
  }

  public update(): void {
    this.smerService.updateSmer(this.data)
      .subscribe(data => {
        this.snackBar.open('Uspesno ste modifikovali smer: ' + data.naziv, 'U redu', {
          duration: 2500
        })
      }),
      
    (error: Error) => {
      console.log(error.name + '-->' + error.message)
      this.snackBar.open('Dogodila se greska. Pokusajte ponovo!', 'Zatvori', {
        duration: 2500
      })
    };
  }

  public delete(): void {
    this.smerService.deleteSmer(this.data.id)
      .subscribe(data => {
        this.snackBar.open('Uspesno obrisan smer', 'U redu', {
          duration: 2500
        });
      }),
      (error: Error) => {
        console.log(error.name + '-->' + error.message)
        this.snackBar.open('Dogodila se greska. Pokusajte ponovo!', 'Zatvori', {
          duration: 2500
        })
      };
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste od izmena!', 'U redu', {
      duration: 1000
    })
  }

}
