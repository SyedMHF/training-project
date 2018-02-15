import {Faculty} from './faculty.enum';
import {ClassEnrollment} from './class-enrollment.enum';
import {StudentType} from './student-type.enum';
import {StudentStatus} from './student-status.enum';

export interface Student {
  matricNumber: string;
  name: string;
  address: string;
  contactNumber: string;
  emailAddress: string;
  course: string;
  semester: number;
  icNumber: string;
  faculty: Faculty;
  studentType: StudentType;
  classEnrollment: ClassEnrollment;
  studentStatus: StudentStatus;
}
