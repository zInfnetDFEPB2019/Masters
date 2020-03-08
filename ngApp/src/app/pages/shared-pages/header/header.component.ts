import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-layout-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	isNavbarCollapsed = true;

	public logoImg = '../../../../assets/ico/ms-icon-70x70.png';

	constructor(
		private router: Router
	) { }

	ngOnInit() {

	}

	public goToHome(): void {
		this.router.navigate(['/home']);
	}

}

//TODO: TABS DE PAGINAS >> View-width < 845px = Togle Button
