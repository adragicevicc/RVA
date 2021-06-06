import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Projekat } from 'src/app/models/projekat';
import { ProjekatService } from 'src/app/services/projekat.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-projekat-dialog',
  templateUrl: './projekat-dialog.component.html',
  styleUrls: ['./projekat-dialog.component.css']
})
export class ProjekatDialogComponent implements OnInit {


  public flag: number;
  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<ProjekatDialogComponent>,
              @Inject (MAT_DIALOG_DATA) public data: Projekat,
              public projekatService:
              ProjekatService) { }

  ngOnInit(): void {
  }

  public add(): void {
    this.projekatService.addProjekat(this.data)
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
    this.projekatService.updateProjekat(this.data)
      .subscribe(data => {
        this.snackBar.open('Uspesno ste modifikovali projekat: ' + data.naziv, 'U redu', {
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
    this.projekatService.deleteProjekat(this.data.id)
      .subscribe(data => {
        this.snackBar.open('Uspesno obrisan projekat', 'U redu', {
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
