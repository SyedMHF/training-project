import {Component, OnInit} from '@angular/core';
import {EmailValidator, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AcademicService} from '../../services/academic.service';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {AssetCreatorDialog} from './asset-creator.dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentStatus} from './student-status.enum';
import {Student} from './student.interface';
import {StudentType} from './student-type.enum';

@Component({
  selector: 'qs-student-creator',
  templateUrl: './student-creator.dialog.html',
})

export class StudentCreatorDialog implements OnInit{

  editorForm: FormGroup;

  // constructor
  constructor(private academicService: AcademicService,
              private router: Router,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar,
              private formBuilder: FormBuilder,
              private dialog: MatDialogRef<StudentCreatorDialog>) {
  }

  ngOnInit(): void {
    this.editorForm = this.formBuilder.group({
      matricNumber: ['', Validators.required],
      name: ['', [(Validators.required)]],
      studentStatus: [StudentStatus.ACTIVE, [(Validators.required)]],
      email: ['', [(EmailValidator)]],
    });
  }

  save(student: Student): void {
    console.log(JSON.stringify(student));
    this.dialog.close();
  }

  close(): void {
    // console.log(JSON.stringify(student));
    this.dialog.close();
  }

}
