import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { VocabListService } from './vocab/services/vocab-list.service';
import { HttpVocabListService } from './vocab/services/http-vocab-list.service';

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
    HomeModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: VocabListService, useClass: HttpVocabListService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
