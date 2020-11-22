import { Component, ContentChild, OnInit } from '@angular/core';
import { WidgetHeaderComponent } from './widget-header.component';

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

  @ContentChild(WidgetHeaderComponent)
  header: WidgetHeaderComponent | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
