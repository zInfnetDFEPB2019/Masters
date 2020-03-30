import { Component, OnInit } from '@angular/core';
import { CardUserModel } from 'src/app/Model/card-user.model';
import { MathUtils } from '../../utils/math.utils'
import * as faker from "faker/locale/pt_BR"

@Component({
	selector: 'app-user-compare',
	templateUrl: './user-compare.component.html',
	styleUrls: ['./user-compare.component.scss']
})
export class UserCompareComponent implements OnInit {

	public MAX_AMOUNT_CARDS = 13;
	public fakeCards: Array<CardUserModel> = [];

	constructor() {
		this.fakeCards = this.generateCards(15);
	}

	ngOnInit() {
	}

	private generateCards(amount: number): Array<CardUserModel> {
		let cards: Array<CardUserModel> = [];

		for (let i = 0; i < amount; i++) {
			let cardUser: CardUserModel = {
				Id: MathUtils.getRandom(0, 1000),
				name: faker.name.firstName() + " " + faker.name.lastName(),
				imgUrl: "string",
				valueLeft: MathUtils.getRandom(0, 100),
				valueMiddle: MathUtils.getRandom(0, 1000),
				valueRight: MathUtils.getRandom(0, 50),
			};

			cards.push(cardUser);
		}
		return cards;
	}

	// private getRandom(min, max) {
	//     return Math.round(Math.random() * (max - min) + min);
	// }
}


/*
>> DOCS:
https://github.com/marak/Faker.js/

>> sample
faker sample: https://imasters.com.br/desenvolvimento/mockando-dados-com-faker-js

>> get avatar
faker.image.imageUrl(400,400,"people");
*/