import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <lib-widget>
      <lib-widget-header></lib-widget-header>
    </lib-widget>
  `,
  styles: []
})
export class AppComponent {
  title = 'demo-app-one';
}
