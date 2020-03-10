import { Injectable } from '@angular/core';


@Injectable({
    //using in all project
    providedIn: 'root'
})
export class MathUtils {

    static getRandom(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    //static doSomething(val: string) { return val; }

    //static doSomethingElse(val: string) { return val; }
}