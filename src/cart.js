import {inject} from 'aurelia-framework';
import {DialogService} from 'aurelia-dialog';
import {Prompt} from './prompt';
import {_} from 'lodash';
import {cartService} from './services/cartService';
import {cartItem} from './models/cartItem';

@inject(cartService, DialogService)
export class Cart {
  constructor(cartService, dialogService) {
    this.cartService = cartService;
    this.dialogService = dialogService;
  }

  heading = '3DHubs cart';
  cartItems;
  selectedFiles;

  get totalItemsToPrint() {
    let total = 0;
    _.forEach(this.cartItems, (ci) => {
      total += Number(`${ci.Quantity}`);
    });
    return total;
  }

  addCartItem (event) {
      let files = event.target.files;

      //TODO post files to server to validate --> handle response
      _.forEach(files, (file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.cartItems.push(new cartItem({
              FileName: file.name,
              FileSize: file.size,
              File: reader.result
            }));
        };
      });
  }
  removeCartItem(item) {
    this.dialogService.open({
      viewModel: Prompt
    }).then(response => {
      if (!response.wasCancelled) {
        let ci = this.cartItems.indexOf(item);
        this.cartItems.splice(ci, 1);
      }
    });
  }

  activate() {
    this.cartItems = this.cartService.getCartItems();
  }
}
