//Stryker disable all
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "home", title: "German Vocab App | Home", component: HomeComponent },
  {
    path: "vocab",
    title: "German Vocab App | Vocab", 
    loadChildren: () => import('./vocab/vocab.module').then(m => m.VocabModule)
  },
  { path: "", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
