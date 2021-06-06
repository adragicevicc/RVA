import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Grupa } from 'src/app/models/grupa';
import { Projekat } from 'src/app/models/projekat';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { StudentDialogComponent } from '../dialogs/student-dialog/student-dialog.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
}) //on changes - trigeruje se kad se promeni nesto
export class StudentComponent implements OnInit, OnDestroy, OnChanges {

  displayedColumns = ['id', 'ime', 'prezime', 'brojIndeksa', 'grupa', 'projekat', 'actions'];
  dataSource: MatTableDataSource<Student>;
  subscription: Subscription;

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  @Input() selektovanaGrupa: Grupa; //input dekorator na nivou child componente kad komunicira sa parent komp
  //selektovana grupa ce biti dobijena iz parent kompoente
  
  constructor(private studentService: StudentService,
              private dialog: MatDialog) { }

  ngOnChanges(): void {
      this.loadData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadData();  }

  public loadData() {
    this.subscription = this.studentService.getStudentiUGrupi(this.selektovanaGrupa.id) 
      .subscribe(data => {
        console.log(data);
        this.dataSource = new MatTableDataSource(data);

        this.dataSource.filterPredicate = (data, filter: string) => {
          const accumulator = (currentTerm, key) => {
            return key === 'projekat' ? currentTerm + data.projekat.naziv : currentTerm + data[key];
          };
          const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
          const transformedFilter = filter.trim().toLowerCase();
          return dataStr.indexOf(transformedFilter) !== -1;
        };

        this.dataSource.sortingDataAccessor = (data, property) => {
          switch (property) {
            case 'projekat': return data.projekat.naziv.toLocaleLowerCase();
            default: return data[property];
          }
        };

        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }),
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
      }
  }

  public openDialog(flag: number, id?: number, ime?: string, prezime?: string, brojIndeksa?: string, grupa?: Grupa, projekat?: Projekat) {
    const dialogRef = this.dialog.open(StudentDialogComponent, {data: {id, ime, prezime, brojIndeksa, grupa, projekat}});
    dialogRef.componentInstance.flag = flag;
    if(flag===1) {
      dialogRef.componentInstance.data.grupa=this.selektovanaGrupa;
    }
    dialogRef.afterClosed()
      .subscribe(result => {
        if(result === 1) {
          this.loadData();
        }
      })
  }

  applyFilter(filterValue: string) {

    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;

  }

  
}
