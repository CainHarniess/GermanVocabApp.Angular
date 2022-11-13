//Stryker disable all
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LoggedInAppComponent } from './logged-in-app/logged-in-app.component';
import { TestingRoutePath, VocabRoutePath } from './shared/routing';

const routes: Routes = [
  { path: "landing", title: "German Vocab App | Landing", component: LandingComponent },
  {
    path: "logged-in",
    component: LoggedInAppComponent,
    children: [
      { path: "home", title: "German Vocab App | Home", component: HomeComponent },
      {
        path: VocabRoutePath.Root,
        title: "German Vocab App | Vocab",
        loadChildren: () => import('./vocab/vocab.module').then(m => m.VocabModule)
      },
      {
        path: TestingRoutePath.Root,
        title: "German Vocab App | Vocab",
        loadChildren: () => import('./testing/testing.module').then(m => m.TestingModule)
      },
      { path: "", redirectTo: "home", pathMatch: "full" },
    ]
  },
  { path: "", redirectTo: "landing", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
