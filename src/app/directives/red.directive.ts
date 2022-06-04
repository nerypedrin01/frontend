import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
import { NgControl } from '@angular/forms';


@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  // @Output() rawChange: EventEmitter<number> = new EventEmitter<number>();

  // constructor(public ngControl: NgControl) { }

  // @HostListener('ngModelChange', ['$event'])
  // onModelChange(event:any) {
  //   this.onInputChange(event, false);
  // }

  // @HostListener('keydown.backspace', ['$event'])
  // keydownBackspace(event:any) {
  //   this.onInputChange(event.target.value, true);
  // }


  // onInputChange(event:any, backspace:any) {
  //   var newVal = (parseInt(event.replace(/[^0-9]/g, ''))).toLocaleString('en-US', { minimumFractionDigits: 0 });
  //   var rawValue = newVal;

  //   if(backspace) {
  //     newVal = newVal.substring(0, newVal.length - 1);
  //   }

  //   if(newVal.length == 0) {
  //     newVal = '';
  //   }
  //   else  {
  //     newVal = newVal;
  //   }

  //   this.ngControl.valueAccessor?.writeValue(newVal);
  //   rawValue = rawValue.replace(/\,/g, '');
  //   this.rawChange.emit(parseInt(rawValue));

  // }
}
