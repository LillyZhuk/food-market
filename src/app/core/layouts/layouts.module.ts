import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


import { LayoutsComponent } from './layouts.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    LayoutsComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NgbModalModule
  ]
})
export class LayoutsModule { }
