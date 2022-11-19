import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AngularMaterialModule } from './angular-material/angular-material.module';

import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationService } from '../core';
import { EventService } from '../core/events';
import { ConsoleLogger, ConsoleLogWriter, Logger, LogService, Severity, SeverityStringConverter } from '../core/logging';
import { RequiredStringLengthValidatorFactory, StringLengthValidatorFactory, ValidationErrorMessageProvider } from '../core/validation';
import { MatSnackBarService } from './angular-material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationContainerComponent } from './application-container/application-container.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from './home/home.module';
import { LandingComponent } from './landing/landing.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { LoggedInAppComponent } from './logged-in-app/logged-in-app.component';
import { NavigationPanelComponent } from './navigation-panel/navigation-panel.component';
import { SharedModule } from './shared/shared.module';
import { AuthenticationService, InMemoryAuthenticationService, InMemoryUserDataProvider } from './authentication/services';

@NgModule({
  declarations: [
    ApplicationContainerComponent,
    AppComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    LandingComponent,
    LoggedInAppComponent,
    NavigationPanelComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularMaterialModule,
    AuthenticationModule,
    HomeModule,
    AppRoutingModule,
  ],
  providers: [
    InMemoryUserDataProvider,
    { provide: AuthenticationService, useClass: InMemoryAuthenticationService },
    ValidationErrorMessageProvider,
    StringLengthValidatorFactory,
    RequiredStringLengthValidatorFactory,
    SeverityStringConverter,
    ConsoleLogWriter,
    { provide: Logger, useClass: ConsoleLogger },
    LogService,
    { provide: "minLevel", useValue: Severity.Information },
    { provide: NotificationService, useClass: MatSnackBarService },
    MatSnackBar,
    EventService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
