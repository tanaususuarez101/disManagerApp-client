import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenBySubject'
})
export class OrdenBySubjectPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value == null) {
      return value;
    }
    value.sort((obj1: any, obj2: any) => {
      return obj1.subject_name.localeCompare(obj2.subject_name);
    });
    return value;
  }

}
