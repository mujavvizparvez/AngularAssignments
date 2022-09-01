import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appColors]',
})
export class ColorsDirective {
  @HostBinding('style.backgroundColor') color: string = 'black';
  constructor(private element: ElementRef, private renderer: Renderer2) {}
 
  // ngOnInit() {
  //   // this.element.nativeElement.style.backgroundColor = 'yellow';
  //   // this.element.nativeElement.style.color = 'purple';
  //   this.renderer.setStyle(this.element.nativeElement, 'color', 'blue');
  //   this.renderer.addClass(this.element.nativeElement, 'bg-danger');

  //   this.renderer.removeClass(this.element.nativeElement, 'bg-danger');
  //   this.renderer.setAttribute(
  //     this.element.nativeElement,
  //     'Title',
  //     'This is renderer2'
  //   );
  // }

  ngOnInit() {
    //  this.applyBackgroundColor('red');
  }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.color = 'blue';
    // this.applyBackgroundColor('purple');
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.color = 'green';
    // this.applyBackgroundColor('blue');
  }
  @HostListener('click')
  onClick() {
    this.color = 'purple';
    //  this.applyBackgroundColor('yellow');
  }
  // applyBackgroundColor(color: string) {
  //   this.renderer.setStyle(
  //     this.element.nativeElement,
  //     'backgroundColor',
  //     color
  //   );
  // }
}
