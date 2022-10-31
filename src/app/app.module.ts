import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AngularMaterialModule } from './angular-material/angular-material.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { VocabListService } from './vocab/services/vocab-list.service';
import { HttpVocabListService } from './vocab/services/http-vocab-list.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryVocabListService } from './vocab/services/in-memory-vocab-list.service';
import { InMemoryDataProvider } from './vocab/services/in-memory-data-seeder.service';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { HttpErrorInterceptor } from '../core/error-handling';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from '../core';
import { MatSnackBarService } from './angular-material';
import { ConsoleLogger, ConsoleLogWriter, Logger, LogService, Severity, SeverityStringConverter } from '../core/logging';
import { GlobalErrorHandler } from '../core/error-handling/global-error-handler';

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
    { provide: ErrorHandler, useClass: GlobalErrorHandler},
    ////InMemoryDataProvider,
    //{ provide: VocabListService, useClass: InMemoryVocabListService },
    { provide: "minLevel", useValue: Severity.Information },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: NotificationService, useClass: MatSnackBarService },
    MatSnackBar,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
