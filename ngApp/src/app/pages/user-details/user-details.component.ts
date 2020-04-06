import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserDetails } from 'src/app/models/user-details.model';
import { Router } from '@angular/router';


const PROFILE_PIC1 = '../../assets/img/faces/kaci-baum-2.jpg';

@Component({
    selector: 'app-user-details',
	templateUrl: './user-details.component.html',
	styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, AfterViewInit {

    @HostListener("window:resize", [])
    public onResize() {
        this.detectScreenSize();
        console.log('VIew Resize')
	}
	
	public userId: string = "";

    public isSmallScreen: boolean = false;

    public profileImg: string = PROFILE_PIC1;
	public userName: string = 'Alex Consagrado Fechamento'
	public companyName: string = 'Minds At Work'

	constructor(
		private userService: UserService,
		private router: Router
	) 
	{
		let urlArray = this.router.url.split('/');
		this.userId = urlArray[urlArray.length -1];			
	}

	ngOnInit() { 
		this.getUserDetails();
	}

    ngAfterViewInit() {
        this.detectScreenSize();
        console.log('After view init')
    }

    private detectScreenSize() {
        let width = window.innerWidth;
        this.isSmallScreen = (width < 900);
	}
	
	public getUserDetails(): void {
		this.userService.getUserDetails(this.userId).subscribe(
			(user: any) => {
				console.log(user);
			},
			(error) => {
				console.log(error);
			});
	}

}
