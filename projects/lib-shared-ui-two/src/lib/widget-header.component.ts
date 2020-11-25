import { Component, InjectionToken, OnInit } from '@angular/core';

export const HEADER_TOKEN = new InjectionToken<WidgetHeaderComponent>('widget-header');

@Component({
  selector: 'lib-widget-header',
  template: `
    <section class="header">
      <h3>Header</h3>
    <section>
  `,
  providers: [
    { provide: HEADER_TOKEN, useExisting: WidgetHeaderComponent }
  ]
})
export class WidgetHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

}
