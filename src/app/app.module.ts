import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DigiClockComponent } from './digi-clock/digi-clock.component';

@NgModule({
  declarations: [AppComponent, DigiClockComponent],
  imports: [
    BrowserModule,
    
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
