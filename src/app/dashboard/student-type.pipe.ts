import {Pipe, PipeTransform} from '@angular/core';
import {StudentType} from './student-type.enum';

@Pipe({name: 'studentTypePipe'})
export class StudentTypePipe implements PipeTransform{

  contructor(){
  }

  transform(value: StudentType): any {
    if (!value) {
      return value;
    }
    switch (StudentType[value.toString()]) {
      case StudentType.FULL_TIME : {
        return 'Full Time';
      }
      case StudentType.PART_TIME : {
        return 'Part Time';
      }
      case StudentType.PJJ : {
        return 'PJJ';
      }
      default: {
        return value;
      }
    }
  }
}
