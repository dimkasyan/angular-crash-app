import { OnInit, AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit, AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.el.nativeElement.focus()
  }

  ngOnInit(): void {
  }

}
