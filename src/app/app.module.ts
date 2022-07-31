import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { VocabModule } from './vocab/vocab.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    VocabModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
