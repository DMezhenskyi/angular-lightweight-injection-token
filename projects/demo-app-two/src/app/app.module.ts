import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LibSharedUiTwoModule } from './../../../lib-shared-ui-two/src/lib/lib-shared-ui-two.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibSharedUiTwoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
