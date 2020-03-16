import { Component, OnInit } from '@angular/core';


const PROFILE_PIC1 = '../../assets/img/faces/kaci-baum-2.jpg';

@Component({
	selector: 'app-user-details',
	templateUrl: './user-details.component.html',
	styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

	public profileImg: string = PROFILE_PIC1;
	public userName: string = 'Alex Consagrado Fechamento'
	public companyName: string = 'Minds At Work'

	constructor() { }

	ngOnInit() {
	}

}
