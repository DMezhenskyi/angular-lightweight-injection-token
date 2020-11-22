import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-widget-header',
  template: `
    <section class="header">
      <h3>Header</h3>
    <section>
  `
})
export class WidgetHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

}
