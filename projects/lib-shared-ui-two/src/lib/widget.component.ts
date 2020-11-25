import { Component, ContentChild, Inject, OnInit } from '@angular/core';
import { HEADER_TOKEN, WidgetHeaderComponent } from './widget-header.component';

@Component({
  selector: 'lib-widget',
  template: `
    <section class="wrapper">
      <ng-content></ng-content>
    <section>
  `,
  styles: [
  ]
})
export class WidgetComponent implements OnInit {

  @ContentChild(HEADER_TOKEN)
  header: WidgetHeaderComponent | null = null;

  constructor(@Inject(HEADER_TOKEN) private anotherHeader: WidgetHeaderComponent) { }

  ngOnInit(): void {
    // this.anotherHeader.ngOnInit()
  }

}
