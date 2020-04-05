import { User } from '../models/user.model';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DB_CONSTS } from '../utils/db.consts';
import { Observable } from 'rxjs';

@Injectable()
export class MyAuthService {
	private idToken: string;

	constructor(private router: Router) { }

	public CreateUser(user: User): Promise<boolean> {
		console.log("User create: ", user);

		return firebase
			.auth()
			.createUserWithEmailAndPassword(user.email, user.password)
			.then((res: any) => {
				// remover a senha para nao armazenar no banco junto com os detalhes
				delete user.password;

				// salvando usuario no banco no path email na base64
				let base64Email = btoa(user.email);
				let userDetailRef = `${DB_CONSTS.DATA_DOCS.USER_DETAIL}/${base64Email}`;
				return firebase
					.database()
					.ref(userDetailRef)
					.set(user)
					.then(res2 => {
						console.log("USUARIO SALVO - resposta", res2);
						return true;
					})
					.catch((error2: Error) => {
						console.log("ERRO - USUARIO NÃO SALVO");
						console.log(error2);
						return false;
					});
			})
			.catch((error: Error) => {
				console.log(error.message);
				console.error(error);
				return false;
			});
	}

	public Login(email: string, password: string): Promise<any> {
		return firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((user: any) => {
				if (!user) return false;

				firebase.auth().currentUser.getIdToken()
					.then((tokenId: string) => {
						this.idToken = tokenId;
						localStorage.setItem("idToken", this.idToken);
						this.router.navigate(["/home"]);
						return true;
					});
			})
			.catch((error: Error) => {
				console.log(error);
				return false;
			});		
	}

	public isAuthenticated(): boolean {
		let token: string = localStorage.getItem("idToken");
		return (token) ? true : false;
	}

	public logout(): void {
		localStorage.removeItem('idToken');
		this.idToken = null;
		firebase.auth().signOut()
			.then(() => {
				this.router.navigate(['/']);
			})
	}
}
