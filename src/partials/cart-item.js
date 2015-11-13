import {bindable} from 'aurelia-framework';
export class CartItemCustomElement {
  @bindable cartitem;
  get dimensions(){
    return `${this.cartitem.Length} x ${this.cartitem.Width} x ${this.cartitem.Height} ${this.cartitem.Metrics}`;
  }
  get volume(){
    return Number(`${this.cartitem.Length}`) * Number(`${this.cartitem.Width}`) * Number(`${this.cartitem.Height}`) + ' ' + `${this.cartitem.Metrics}<sup>3</sup>`;
  }
  get fileSize() {
    return Math.ceil(Number(`${this.cartitem.FileSize}`)/1000) + ' kb';
  }
  /*
    TODO Needs some love, lost some time here :(
    Bla is a variable that is always undefined, cant figure out why,
      according to http://aurelia.io/docs.html
      and https://github.com/aurelia/templating/issues/195 it should be the BindingContext.
    Some context is given in the secont argument and I used that to reach the appropriate bindingContext.
    For now a dirty hack.
  */
  bind(bla, context) {
    this.context = context.parentOverrideContext.bindingContext;
  }
}
