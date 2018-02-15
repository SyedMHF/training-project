import {Component, OnDestroy, OnInit} from '@angular/core';
import {AcademicService} from '../../services/academic.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Student} from './student.interface';
import {AssetCreatorDialog} from './asset-creator.dialog';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'qs-student-detail',
  templateUrl: './student-detail.page.html'
})

export class StudentDetailPage implements OnInit, OnDestroy{

  //declare variable single set
  student$: Observable<Student>;

  constructor(private academicService: AcademicService,
              private router: Router,
              private route: ActivatedRoute){
  }

  loadStudent(matricNumber: string): void {
    console.log('matricNumber: ' + matricNumber);
    this.student$ = this.academicService.findStudentByMatricNumber(matricNumber);
  }
  ngOnInit():void{
    this.route.params.subscribe((params: { matricNumber: string }) => {
      //this is where you retrieve data
      this.student$ = this.academicService.findStudentByMatricNumber(params.matricNumber);
      this.loadStudent(params.matricNumber);
    });
  }

  ngOnDestroy(): void {
    // no op
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}
