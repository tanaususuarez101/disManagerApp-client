import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (args == null || args === '' || args.length < 3) {
      return value;
    }

    return value.filter(val => {
      return (val.subject_name.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (val.university_name.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (val.university_acronym.toLowerCase().indexOf(args.toLowerCase()) > -1);
    });
  }

}
