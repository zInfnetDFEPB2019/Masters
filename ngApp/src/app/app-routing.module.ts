import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { UserCompareComponent } from './pages/user-compare/user-compare.component';
import { HallOfFameComponent } from './pages/hall-of-fame/hall-of-fame.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';


const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'profile', component: UserDetailsComponent },
	{ path: 'project', component: ProjectDetailsComponent },
	{ path: 'compare', component: UserCompareComponent },
	{ path: 'hall', component: HallOfFameComponent },
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', component: NotFoundPageComponent }
];

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule],
})
export class AppRoutingModule { }

