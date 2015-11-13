import {inject} from 'aurelia-framework';
import {cartItem} from '../models/cartItem';

export class cartService {
  getCartItems(){
    //Mocked cartItems
    let items = [];
    // items.push(new cartItem({
    //   FileName: 'Model',
    //   Quantity: 1
    // }));
    // items.push(new cartItem({
    //   FileName: 'Model',
    //   Quantity: 2
    // }));
    // items.push(new cartItem({
    //   FileName: 'Model',
    //   Quantity: 3
    // }));
    return items;
  }
}
