import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
// import { AppRoutingModule } from './app.routing';    //app.routing.ts.sample

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatListModule } from '@angular/material/list';
import { MatButtonModule, MatCheckboxModule, MatIconModule } from '@angular/material';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { TableDataComponent } from './core/table-data/table-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TableDataComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatListModule   //Angular Material
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
