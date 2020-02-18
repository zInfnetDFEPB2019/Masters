import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-layout-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	isNavbarCollapsed = true;

	public logoImg = '../../../../assets/ico/ms-icon-70x70.png';

	constructor() { }

	ngOnInit() {

	}

}
