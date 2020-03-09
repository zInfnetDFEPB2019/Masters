import { Component, OnInit, Input } from '@angular/core';
import { CardUserModel } from 'src/app/Model/card-user.model';
import { UserCompareService } from 'src/app/services/user-compare.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
    selector: 'app-card-user',
    templateUrl: './card-user.component.html',
    styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {

    @Input('cardData') public card: CardUserModel;
    private imgLoading: boolean = true;

    constructor(
        private userCompareServ: UserCompareService,
        private sanitizer: DomSanitizer
    ) {
        this.getPhoto();
    }

    ngOnInit() {
        console.log("OnInit CARD: ", this.card);
    }

    private getPhoto() {
        this.imgLoading = true;

        this.userCompareServ.getPhotoCard().subscribe(
            (res) => {
                let blobImg: any = new Blob([res], { type: 'image/jpeg' });
                let objUrl = window.URL.createObjectURL(blobImg);
                let secureObjUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(objUrl);

                setTimeout(() => {
                    this.card.imgUrl = secureObjUrl;
                    this.imgLoading = false;
                }, 1800);

            },
            (error) => {
                console.error("Error request: ", error);

            },
            () => {
                console.log("Terminado!");
            });
    }

    private getImg() {
        let mySrc;
        const reader = new FileReader();
        //reader.readAsDataURL(blob);
        reader.onloadend = function () {
            // result includes identifier 'data:image/png;base64,' plus the base64 data
            mySrc = reader.result;
        }
    }
}
