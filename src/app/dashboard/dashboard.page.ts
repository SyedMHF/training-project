import {Component, OnChanges, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Asset} from './asset.interface';
import {Student} from './student.interface';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {StudentCreatorDialog} from './student-creator.dialog';
import {AssetService} from '../../services/asset.service';
import {AcademicService} from '../../services/academic.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'qs-dashboard',
  templateUrl: './dashboard.page.html',
})
export class DashboardPage implements OnInit{

  // declare observable
  assets$: Observable<Asset[]>;
  students$: Observable<Student[]>;
  creatorDialogRef: MatDialogRef<StudentCreatorDialog>;

  // constructor
  constructor(private assetService: AssetService,
              private academicService: AcademicService,
              private router: Router,
              private route: ActivatedRoute,
              private vcf: ViewContainerRef,
              private dialog: MatDialog
  ) {
  }

    // $scope.imagePath = 'img/washedout.png';

  loadPosts(): void {
    // this.assets$ = this.assetService.findAssets();
    this.students$ = this.academicService.findStudents();
  }

  viewStudentInfo(): void {
    this.router.navigate(['/student-list']);
  }

  viewClassEnrollment(student: Student):void{
    console.log(JSON.stringify(student));
    this.router.navigate(['/studentDetail']);
  }

  viewCourseEnrollment(student: Student):void{
    console.log(JSON.stringify(student));
    this.router.navigate(['/studentDetail']);
  }

  // ngOnChanges(): void{
  //   console.log('ngOnChanges');
  // }
  //
  ngOnInit(): void {
    console.log('test ngOnInit');
    this.loadPosts();
  }

  // ngDoCheck(): void{
  //   console.log('doCheck');
  // }

  // ngOnDestroy(): void {
  //   // no op
  //   console.log('ngdestroy');
  // }

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
