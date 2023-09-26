import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { ListComponent } from './list/list.component';
import { NotfountComponent } from './notfount/notfount.component';
import { ModifierComponent } from './modifier/modifier.component';

const routes: Routes = [

  {path :'' ,redirectTo:'/ajout' , pathMatch:'full'},
  {path :'ajout' , component : AjoutComponent},
  {path :'list' , component :ListComponent},
  {path :'modifier/:id' ,component : ModifierComponent},
  {path :'**' , component: NotfountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
