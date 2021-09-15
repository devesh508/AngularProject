import { Directive, ElementRef, HostListener,Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHlight]'
})
export class HlightDirective {

  // @HostBinding('style.background-color') backColor:string;
  // constructor(){
  //   this.backColor = 'red';
  // }
  constructor(private el: ElementRef,private renderer:Renderer2) { 
    el.nativeElement.style.backgroundColor = 'yellow';
  }
@HostListener('click') doSomething(){
  alert('HostListerner Works!!');
}
@HostListener('mouseenter') doSomethingElse(){
  console.log('mouse just enter');
}
@HostListener('mousemove') doSomethingElseElse(){
  console.log('mouse just move')
}
}
