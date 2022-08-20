import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemperatureConverterPipe } from './temperature-converter.pipe';

@NgModule({
  declarations: [AppComponent, TemperatureConverterPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
