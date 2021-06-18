import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { routing, appRoutingProviders } from '../../app.routing';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    routing,
    appRoutingProviders
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    appRoutingProviders
  ]
})
export class LayoutModule { }
