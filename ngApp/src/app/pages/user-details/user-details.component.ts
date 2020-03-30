import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';


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

    public isSmallScreen: boolean = false;

    public profileImg: string = PROFILE_PIC1;
	public userName: string = 'Alex Consagrado Fechamento'
	public companyName: string = 'Minds At Work'

	constructor(
        private breakpointObserver: BreakpointObserver
    ) { }

	ngOnInit() {  }

    ngAfterViewInit() {
        this.detectScreenSize();
        console.log('After view init')
    }

    private detectScreenSize() {
        let width = window.innerWidth;
        this.isSmallScreen = (width < 900);
    }

}
