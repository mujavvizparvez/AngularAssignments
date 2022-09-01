import {
  Directive,
  ElementRef,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
@Directive({
  selector: '[appAlternateIf]',
})
export class AlternateIfDirective {
  // @Input() appAlternateIf: boolean = false;
  @Input() set appAlternateIf(condition: boolean) {
    if (condition) {
      //need to show the element
      this.vcRef.createEmbeddedView(this.template);
    } else {
      // Remove the element
      this.vcRef.clear();
    }
  }
  constructor(
    private template: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}

  //   ngOnChanges() {
  //     if (this.appAlternateIf) {
  //       //need to show the element
  //       this.vcRef.createEmbeddedView(this.template);
  //     } else {
  //       // Remove the element
  //       this.vcRef.clear();
  //     }
  //   }
}
