import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Grupa } from 'src/app/models/grupa';
import { Smer } from 'src/app/models/smer';
import { GrupaService } from 'src/app/services/grupa.service';
import { SmerService } from 'src/app/services/smer.service';

@Component({
  selector: 'app-grupa-dialog',
  templateUrl: './grupa-dialog.component.html',
  styleUrls: ['./grupa-dialog.component.css']
})
export class GrupaDialogComponent implements OnInit, OnDestroy {

  public flag: number;
  public smerovi: Smer[];
  public subscription: Subscription;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<GrupaDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Grupa,
              public grupaService: GrupaService,
              public smerService: SmerService) { }

  ngOnInit(): void {
    this.subscription = this.smerService.getAllSmerovi().subscribe(data => {
      this.smerovi=data;
    }),
    (error: Error) => {
      console.log(error.name + '-->' + error.message)
    };
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  compareTo(a,b) {
    return a.id=b.id;
  }

  public add(): void {
    this.grupaService.addGrupa(this.data)
      .subscribe(()=> {
        this.snackBar.open('Uspesno dodata grupa', 'U redu', {
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
    this.grupaService.updateGrupa(this.data)
      .subscribe(data => {
        this.snackBar.open('Uspesno ste modifikovali grupu: ' + data.oznaka, 'U redu', {
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
    this.grupaService.deleteGrupa(this.data.id)
      .subscribe(() => {
        this.snackBar.open('Uspesno obrisana grupa', 'U redu', {
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
