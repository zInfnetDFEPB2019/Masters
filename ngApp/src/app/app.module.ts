//Core Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// bootstrap
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Angular MAterial
import {
	MatButtonModule,
	MatCheckboxModule,
	MatIconModule,
	MatBadgeModule,
	MatListModule,
	MatTableModule,
	MatExpansionModule,
	MatFormFieldModule,
	MatInputModule,
	MatTabsModule,
	MatMenuModule,
	MatCardModule,
	MatRippleModule,
} from '@angular/material';

// Pages
import { HeaderComponent } from './pages/shared/header/header.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { TableDataComponent } from './pages/home/table-data/table-data.component';
import { HomeComponent } from './pages/home/home.component';
import { AccessComponent } from './pages/access/access.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { UserCompareComponent } from './pages/user-compare/user-compare.component';
import { HallOfFameComponent } from './pages/hall-of-fame/hall-of-fame.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { CardUserComponent } from './pages/shared/card-user/card-user.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		TableDataComponent,
		HomeComponent,
		AccessComponent,
		UserDetailsComponent,
		ProjectDetailsComponent,
		UserCompareComponent,
		HallOfFameComponent,
		NotFoundPageComponent,
		CardUserComponent
	],
	imports: [
		BrowserModule,
		NgbModule,
		FormsModule,
		RouterModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		//Angular Material
		MatButtonModule, MatCheckboxModule, MatIconModule, MatListModule, MatTableModule, MatBadgeModule, MatExpansionModule,
		MatFormFieldModule, MatInputModule, MatTabsModule, MatMenuModule, MatCardModule, MatListModule, MatRippleModule,
		// import HttpClientModule after BrowserModule.
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
