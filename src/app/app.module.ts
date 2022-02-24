import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DigiClockComponent } from './digi-clock/digi-clock.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {MatButtonModule} from '@angular/material';




@NgModule({
  declarations: [AppComponent, DigiClockComponent],
  imports: [BrowserModule, BrowserAnimationsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
