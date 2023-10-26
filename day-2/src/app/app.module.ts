import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child11Component } from './child11/child11.component';
import { Child21Component } from './child21/child21.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    Child1Component,
    Child2Component,
    Child11Component,
    Child21Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
