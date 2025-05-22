import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
//import { RegistrosComponent } from './registros/registros.component';

const routes: Routes = [
  {path: 'contact', component: ContactFormComponent},
  //{path: 'subscribe', component: RegistrosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmspageRoutingModule { }
