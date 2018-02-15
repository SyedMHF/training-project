import {Lecturer} from './lecturer.enum';
import {Course} from './course.interface';

export interface ClassEnrollment {
  name: string;
  code: string;
  room: string;
  course: Course;
  lecturer: Lecturer;
  time: string
}
