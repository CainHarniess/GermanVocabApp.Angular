import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AngularMaterialModule } from './angular-material/angular-material.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { VocabListService } from './vocab/services/vocab-list.service';
import { HttpVocabListService } from './vocab/services/http-vocab-list.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryVocabListService } from './vocab/services/in-memory-vocab-list.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HomeModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: VocabListService, useClass: InMemoryVocabListService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
