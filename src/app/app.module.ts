import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialExampleModule } from 'src/material.module';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { EditRaghavTemplateComponent } from './templates/edit-raghav-template/edit-raghav-template.component';
import { PreviewRaghavTemplateComponent } from './templates/preview-raghav-template/preview-raghav-template.component';
import { NgxCaptureModule } from 'ngx-capture';

@NgModule({
  declarations: [
    AppComponent,
    EditRaghavTemplateComponent,
    PreviewRaghavTemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    NgxCaptureModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
