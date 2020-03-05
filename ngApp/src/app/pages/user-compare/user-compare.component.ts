import { Component, OnInit } from '@angular/core';
import { CardUserModel } from 'src/app/core/Model/card-user.model';
import * as faker from "faker/locale/pt_BR"

@Component({
    selector: 'app-user-compare',
    templateUrl: './user-compare.component.html',
    styleUrls: ['./user-compare.component.scss']
})
export class UserCompareComponent implements OnInit {

    public arrayCards: Array<any> = Array.from(new Array(12), (val, index) => val);
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
                name: faker.name.findName(),
                imgUrl: "string",
                labelLeft: "string",
                valueLeft: 1,
                labelMiddle: "string",
                valueMiddle: 1,
                labelRight: "string",
                valueRight: 1
            };

            cards.push(cardUser);
        }
        console.log(cards);
        return cards;
    }

    private getRandom(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}


/*
>> DOCS:
https://github.com/marak/Faker.js/

>> sample
faker sample: https://imasters.com.br/desenvolvimento/mockando-dados-com-faker-js

>> get avatar
faker.image.imageUrl(400,400,"people");
*/