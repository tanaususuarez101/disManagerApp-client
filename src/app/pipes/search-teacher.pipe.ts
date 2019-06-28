import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTeacher'
})
export class SearchTeacherPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value, args);
    if (args == null || args === '') {
      return value;
    }
    const resultSubjects = [];
    for (const post of value) {
      if (post.teacher_name.toLowerCase().indexOf(args.toLowerCase()) > -1) {
        resultSubjects.push(post);
      } else if (post.teacher_surnames.toLowerCase().indexOf(args.toLowerCase()) > -1) {
        resultSubjects.push(post);
      }
    }
    return resultSubjects;
  }

}
