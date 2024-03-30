import { Injectable } from '@angular/core';
import { MultiplyService } from './multiply.service';

@Injectable()
export class DataService {
    cookies: { name: string, quantity: number }[] = [];

    constructor(private multSvc: MultiplyService) {
        this.cookies.push({ name: 'fig-newton', quantity: 2 });
        this.cookies.push({ name: 'chocolate chip', quantity: 3 });
        this.cookies.push({ name: 'oatmeal', quantity: 4 });
    }

    multiply(multiplyby: number) {
        for (let i = 0; i < this.cookies.length; i++) {
            this.multSvc.multiplyBy(this.cookies[i], multiplyby);
        }
    }
}
