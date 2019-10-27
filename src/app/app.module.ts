import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';
import { PhoneNumberPipe } from './phone-number.pipe';
import { ErrorDirective } from './error.directive';
import { ListeComponent } from './liste/liste.component';
import { RouterModule, Routes } from '@angular/router';
import { ApiService } from 'src/api.service';
import { ReactiveFormsModule } from '@angular/forms';


const appRoutes: Routes = [
  { path: 'liste', component: ListeComponent },
  { path: 'formulaire', component: FormulaireComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TetiereComponent,
    FooterComponent,
    FormulaireComponent,
    RecapitulatifComponent,
    PhoneNumberPipe, 
    ErrorDirective, ListeComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }