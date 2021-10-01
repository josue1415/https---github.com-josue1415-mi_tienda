import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nit'
})
export class NitPipe implements PipeTransform {

  formatt: string = "";
  formatt2: string = "";
  formatt3: string = "";

  transform(nit: string) {

    if (nit != null) {
      if (nit.length == 4) {
        this.formatt = nit.slice(0, 4) + "-"
      } else if (nit.length == 11) {
        this.formatt2 = nit.slice(5, 11) + "-"
      } else if (nit.length == 15) {
        this.formatt3 = nit.slice(12, 15) + "-"
      }
      return this.formatt + this.formatt2 + this.formatt3;
    }
    return '';
  }

}
