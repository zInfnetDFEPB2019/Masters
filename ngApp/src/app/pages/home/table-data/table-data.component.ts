import { Component, OnInit } from '@angular/core';

declare interface TableData {
	headerRow: string[];
	dataRows: string[][];
}

export interface PeriodicElement {
	name: string;
	position: number;
	weight: number;
	symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
	{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
	{ position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
	{ position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
	{ position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
	{ position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
	{ position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
	{ position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
	{ position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
	{ position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
	{ position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];



@Component({
	selector: 'app-table-data',
	templateUrl: './table-data.component.html',
	styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {
	messages = this.createList();

	// Expansion Panel
	panelOpenState = false;

	displayedColumns: string[] = ['position', 'symbol', 'name', 'weight'];
	columnsToDisplay: string[] = this.displayedColumns.slice();

	dataSource = ELEMENT_DATA;

	constructor() { }

	ngOnInit() {

	}

	createList(): Array<any> {
		let messages = [];

		for (let index = 0; index < 20; index++) {
			const item = {
				name: 'Entity '+ index,				
			}
			messages.push(item);
		}
		return messages;
	}

	// BUTTON Methods
	addColumn() {
		const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
		this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
	}

	removeColumn() {
		if (this.columnsToDisplay.length) {
			this.columnsToDisplay.pop();
		}
	}

	shuffle() {
		let currentIndex = this.columnsToDisplay.length;
		while (0 !== currentIndex) {
			const randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// Swap
			const temp = this.columnsToDisplay[currentIndex];
			this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
			this.columnsToDisplay[randomIndex] = temp;
		}
	}

	viewProfile() {
		alert('Funciona!');
	}

}
