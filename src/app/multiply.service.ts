import { Injectable } from '@angular/core';

@Injectable()
export class MultiplyService {

  constructor() { }

  multiplyBy(value: {name: string, quantity: number}, multiplyby: number) {
    value.quantity = value.quantity * multiplyby;
  }
}
