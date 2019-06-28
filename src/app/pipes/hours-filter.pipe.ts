import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hoursFilter'
})
export class HoursFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args == null || args === '') {
      return value;
    }
    if (args === 'notfull') {
      const resultSubjects = [];
      for (const post of value) {
        if (post.cover_hours < 0) {
          resultSubjects.push(post);
        }
      }
      return resultSubjects;
    }
    return value;
  }
}
