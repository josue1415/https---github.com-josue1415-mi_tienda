import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSizeDirective]'
})
export class SizeDirectiveDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.fontSize = '50px';

  }

}
