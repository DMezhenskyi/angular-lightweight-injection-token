import { Component, OnInit } from '@angular/core';

export abstract class HeaderToken {
  abstract refresh(): void;
}
@Component({
  selector: 'lib-widget-header',
  template: `
    <section class="header">
      <h3>Header</h3>
    <section>
  `,
  providers: [
    { provide: HeaderToken, useExisting: WidgetHeaderComponent }
  ]
})
export class WidgetHeaderComponent extends HeaderToken implements OnInit {
  refresh(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {}

}
