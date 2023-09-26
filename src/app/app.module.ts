import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FertComponent } from './fert/fert.component';
import { FormsModule } from '@angular/forms';
import { AjoutComponent } from './ajout/ajout.component';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from './header/header.component';
// import { AjoutrComponent } from './ajoutr/ajoutr.component';
import { HttpClientModule } from '@angular/common/http';
import { NotfountComponent } from './notfount/notfount.component';
import { ModifierComponent } from './modifier/modifier.component';

@NgModule({
  declarations: [
    AppComponent,
    FertComponent,
    AjoutComponent,
    ListComponent,
    HeaderComponent,
    NotfountComponent,
    ModifierComponent,
    // AjoutrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
