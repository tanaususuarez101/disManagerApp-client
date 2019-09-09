import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'areaFilter',
  pure: false
})
export class AreaFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    /**
     * ATC: Arquitectura Y Tecnología de Computadores (35)
     * CCIA: Ciencia De La Comp. E Intel. Artificial(75)
     * LSI: Lenguajes Y Sistemas Informáticos (570)
     * */

    if (args == null || (!args[0].checked && !args[1].checked && !args[2].checked) ) { return value; }

    let ATC = []; let CCIA = []; let LSI = [];

    if (args[0].value === 'ATC' && args[0].checked) {
      ATC = value.filter(data => data.area_cod === '35');
    }
    if (args[1].value === 'CCIA' && args[1].checked) {
      CCIA = value.filter(data => data.area_cod === '75');
    }
    if (args[2].value === 'LSI' && args[2].checked) {
      LSI = value.filter(data => data.area_cod === '570');
    }

    value = ATC.concat(CCIA);
    return value.concat(LSI);
  }

}
