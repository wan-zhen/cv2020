import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { AbountComponent } from './abount/abount.component';
import { ArrowBtnComponent } from './arrow-btn/arrow-btn.component';
import { AbilitiesComponent } from './abilities/abilities.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    AbountComponent,
    ArrowBtnComponent,
    AbilitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
