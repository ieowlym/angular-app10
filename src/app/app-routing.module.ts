import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelComponent } from './model-driven/model.component';
import { TemplateComponent } from './template-driven/template.component';

const routes: Routes = [
  {path: 'template-driven', component: TemplateComponent},
  {path: 'model-driven', component: ModelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
