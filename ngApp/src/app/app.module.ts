import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
// import { AppRoutingModule } from './app.routing';    //app.routing.ts.sample

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular MAterial imports
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatBadgeModule,
  MatListModule,
  MatTableModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule
 } from '@angular/material';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { TableDataComponent } from './core/table-data/table-data.component';
import { RowDetailsComponent } from './core/table-data/row-details/row-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TableDataComponent,
    RowDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatListModule, MatTableModule,  //Angular Material
    MatBadgeModule, MatExpansionModule, MatFormFieldModule, MatInputModule    //Angular Material
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
