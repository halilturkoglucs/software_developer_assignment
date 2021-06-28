import {
  ContentChild,
  Directive,
  ElementRef, HostListener,
  Input,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {

  // @Input() parametroPlantilla: TemplateRef<any>;

  @ContentChild( "tooltipTemplate" ) tooltipTemplateRef?: TemplateRef<Object>;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef) { }

  @HostListener('mouseenter')  onMouseEnter(): void {
    if (this.tooltipTemplateRef) {
      const view = this.viewContainerRef.createEmbeddedView(this.tooltipTemplateRef);
      view.rootNodes.forEach(node => {
        this.renderer.appendChild(this.elementRef.nativeElement, node);
      });
    }
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    if (this.viewContainerRef) {
      this.viewContainerRef.clear();
    }
  }
}
