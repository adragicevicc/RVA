import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Projekat } from 'src/app/models/projekat';
import { Student } from 'src/app/models/student';
import { ProjekatService } from 'src/app/services/projekat.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.css']
})
export class StudentDialogComponent implements OnInit, OnDestroy {

  public projekti: Projekat[];
  public flag: number;
  public projekatSubscription: Subscription;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<StudentDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Student,
              public studentService: StudentService,
              public projekatService: ProjekatService) { }


  ngOnDestroy(): void {
    this.projekatSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.projekatSubscription = this.projekatService.getAllProjekti()
      .subscribe(projekti => {
        this.projekti = projekti;
      }),
    (error: Error) => {
      console.log(error.name + '-->' + error.message)
    };
  }

  compareTo(a,b) {
    return a.id=b.id;
  }

  public add(): void {
    this.studentService.addStudent(this.data)
      .subscribe(()=> {
        this.snackBar.open('Uspesno dodat student', 'U redu', {
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
    this.studentService.updateStudent(this.data)
      .subscribe(data => {
        this.snackBar.open('Uspesno ste modifikovali studenta: ' + data.brojIndeksa, 'U redu', {
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
    this.studentService.deleteStudent(this.data.id)
      .subscribe(() => {
        this.snackBar.open('Uspesno obrisan student', 'U redu', {
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
