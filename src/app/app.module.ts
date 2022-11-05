import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AngularMaterialModule } from './angular-material/angular-material.module';

import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationService } from '../core';
import { ConsoleLogger, ConsoleLogWriter, Logger, LogService, Severity, SeverityStringConverter } from '../core/logging';
import { MatSnackBarService } from './angular-material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from './home/home.module';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { HttpVocabListService } from './vocab/services/http-vocab-list.service';
import { VocabListService } from './vocab/services/vocab-list.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoadingSpinnerComponent,
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
    SeverityStringConverter,
    ConsoleLogWriter,
    { provide: Logger, useClass: ConsoleLogger },
    LogService,
    { provide: VocabListService, useClass: HttpVocabListService },
    ////InMemoryDataProvider,
    //{ provide: VocabListService, useClass: InMemoryVocabListService },
    { provide: "minLevel", useValue: Severity.Information },
    { provide: NotificationService, useClass: MatSnackBarService },
    MatSnackBar,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
