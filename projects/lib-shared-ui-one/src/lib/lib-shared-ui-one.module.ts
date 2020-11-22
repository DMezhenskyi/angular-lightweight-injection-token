import { WidgetHeaderComponent } from './widget-header.component';
import { NgModule } from '@angular/core';
import { WidgetComponent } from './widget.component';



@NgModule({
  declarations: [WidgetComponent, WidgetHeaderComponent],
  imports: [
  ],
  exports: [WidgetComponent, WidgetHeaderComponent]
})
export class LibSharedUiOneModule { }
