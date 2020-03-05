import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-user-compare',
	templateUrl: './user-compare.component.html',
	styleUrls: ['./user-compare.component.scss']
})
export class UserCompareComponent implements OnInit {

	public arrayCards: Array<any> = Array.from(new Array(12), (val, index) => val);

	constructor() { }

	ngOnInit() {
	}

}
