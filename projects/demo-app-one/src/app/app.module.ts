import { LibSharedUiOneModule } from './../../../lib-shared-ui-one/src/lib/lib-shared-ui-one.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibSharedUiOneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
