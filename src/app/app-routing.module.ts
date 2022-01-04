import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditRaghavTemplateComponent } from './templates/edit-raghav-template/edit-raghav-template.component';
import { PreviewRaghavTemplateComponent } from './templates/preview-raghav-template/preview-raghav-template.component';

const routes: Routes = [
  { path: 'edit-raghav-template', component: EditRaghavTemplateComponent },
  { path: 'preview-raghav-template', component: PreviewRaghavTemplateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
