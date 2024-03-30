import { Inject, Injectable } from '@angular/core';

@Injectable()
export class DairyService {

    dairyArray: { type: string, quantity: number }[] = [];

    constructor(@Inject('DAIRY_BOOL') private onlymilk: boolean) {
        if (onlymilk) {
            this.dairyArray.push({ type: 'whole milk', quantity: 1 });
            this.dairyArray.push({ type: 'strawberry milk', quantity: 2 });
            this.dairyArray.push({ type: 'chocolate milk', quantity: 3 });
        } else {
            this.dairyArray.push({ type: 'cheese', quantity: 1 });
            this.dairyArray.push({ type: 'yogurt', quantity: 2 });
            this.dairyArray.push({ type: 'cottage cheese', quantity: 3 });            
        }
    }
}
