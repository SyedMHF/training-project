import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Student} from './student.interface';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {StudentCreatorDialog} from './student-creator.dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {AcademicService} from '../../services/academic.service';

@Component({
  selector: "qs-student-list",
  templateUrl: "./student-list.page.html"
})
export class StudentListPage implements OnInit {

  students$: Observable<Student[]>;
  creatorDialogRef: MatDialogRef<StudentCreatorDialog>;

  constructor(private academicService: AcademicService,
              private router: Router,
              private route: ActivatedRoute,
              private vcf: ViewContainerRef,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.students$ = this.academicService.findStudents();
  }

  viewStudent(student: Student): void {
    console.log(JSON.stringify(student));
    this.router.navigate(['/studentDetail', student.matricNumber]);
  }



  back(): void {
    this.router.navigate(['/dashboard']);
  }

  showAddDialog(): void {
    console.log('showContainerDialog');
    let config: MatDialogConfig = new MatDialogConfig();
    config.viewContainerRef = this.vcf;
    config.role = 'dialog';
    config.width = '70%';
    config.height = '60%';
    config.position = {top: '0px'};
    this.creatorDialogRef = this.dialog.open(StudentCreatorDialog, config);
    this.creatorDialogRef.afterClosed().subscribe((res) => {
      console.log('close dialog');
    });
  }
}
