import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';

import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { DayCountPipe } from './day-count.pipe';

@NgModule({
  declarations: [AppComponent, QuotesComponent, QuoteDetailsComponent, DayCountPipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
