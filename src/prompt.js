import {DialogController} from 'aurelia-dialog';

export class Prompt {
  static inject = [DialogController];

  constructor(controller){
    this.controller = controller;

    controller.settings.lock = false;
    controller.settings.centerHorizontalOnly = true;
  }
}
