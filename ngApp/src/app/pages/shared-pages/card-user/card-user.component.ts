import { Component, OnInit, Input } from '@angular/core';
import { CardUserModel } from 'src/app/core/Model/card-user.model';
import { UserCompareService } from 'src/app/services/user-compare.service';

@Component({
	selector: 'app-card-user',
	templateUrl: './card-user.component.html',
	styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {

	@Input('cardData') public card: CardUserModel;


	constructor(
		private userCompareServ: UserCompareService
	) {
		console.log("CONSTRUCTOR CARD: ", this.card);
	}

	ngOnInit() {
	}

	private teste() {
		console.log("TESTE CARD: ", this.card);
		this.userCompareServ.getPhotoCard().subscribe(
			(res) => {
				let urlCreator = window.URL;

				let photo: any = new Blob([res], { type: 'image/jpeg' });
				this.card.imgUrl = urlCreator.createObjectURL(photo);
				console.log("response photo: ", photo);

				// let blob = new Blob(
				// 	[res._body],
				// 	{ type: res.headers.get("Content-Type") }
				// );

				// let imageData = urlCreator.createObjectURL(blob);
				// console.log("response imageData: ", imageData);
			},
			(error) => {
				console.error("Error request: ", error);

			},
			() => {
				console.log("Terminado!");
			});
	}
}
