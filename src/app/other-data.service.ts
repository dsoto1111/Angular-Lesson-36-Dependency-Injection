import { Injectable } from '@angular/core';
import { MultiplyService } from './multiply.service';

@Injectable()
export class OtherDataService {
    cookies: { name: string, quantity: number }[] = [];

    constructor(private multSvc: MultiplyService) {
        this.cookies.push({name: 'sugar', quantity: 2});
        this.cookies.push({name: 'peanut butter', quantity: 3});
        this.cookies.push({name: 'cream filled', quantity: 4});
    }

    multiply(multiplyby: number) {
        for (let i = 0; i < this.cookies.length; i++) {
            this.multSvc.multiplyBy(this.cookies[i], (multiplyby * 2));
        }
    }
}
