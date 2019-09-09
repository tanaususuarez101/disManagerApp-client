import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hoursFilter',
  pure: false
})
export class HoursFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (args == null || (!args[0].checked && !args[1].checked && !args[2].checked) ) { return value; }

    let uncovered = []; let cover = []; let exceeded = [];

    if (args[0].value === 'uncovered' && args[0].checked) {
      uncovered = value.filter(data => data.group_cover_hours < 0);
    }
    if (args[1].value === 'exceeded' && args[1].checked) {
      exceeded = value.filter(data => data.group_cover_hours > 0);
    }
    if (args[2].value === 'cover' && args[2].checked) {
      cover = value.filter(data => data.group_cover_hours === 0);
      console.log(cover);
    }

    value = uncovered.concat(exceeded);
    return value.concat(cover);
  }
}
