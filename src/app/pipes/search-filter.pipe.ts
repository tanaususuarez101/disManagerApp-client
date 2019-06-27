import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args == null || args === '' || args.length < 3) {
      return value;
    }
    const resultSubjects = [];
    for (const post of value) {
      if (post.subject_name.toLowerCase().indexOf(args.toLowerCase()) > -1) {
        resultSubjects.push(post);
      } else if (post.university_degree_name.toLowerCase().indexOf(args.toLowerCase()) > -1) {
        resultSubjects.push(post);
      }
    }
    return resultSubjects;
  }

}
