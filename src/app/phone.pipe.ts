import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  formatt: string = "";

  transform(phone: string) {
    if (phone != null) {
      if (phone.length == 4) {
        this.formatt = phone.slice(0, 4) + "-"
      }
      return this.formatt;
    }
    return '';
  }
}
