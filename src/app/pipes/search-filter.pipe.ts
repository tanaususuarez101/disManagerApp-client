import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value, args);
    if (args == null || args === '' || args.length < 3) {
      return value;
    }
    const resultSubjects = [];
    for (const post of value) {
      if (post.name.toLowerCase().indexOf(args.toLowerCase()) > -1) {
        resultSubjects.push(post);
      }
    }
    return resultSubjects;
  }

}
