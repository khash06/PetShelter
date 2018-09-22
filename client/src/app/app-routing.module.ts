import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path: "pets", component: HomeComponent},
  {path: "pets/new", component: NewComponent},
  {path: "pets/:id/edit", component: EditComponent},
  {path: "pets/:id", component: DetailsComponent},
  {path: "", pathMatch: 'full', redirectTo: 'pets'},
  {path: "**", pathMatch: 'full', redirectTo: 'pets'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
