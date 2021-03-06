import { Injectable } from '@angular/core';

@Injectable()
export class InfoSnackService {

  constructor() { }

  displayInfo(selector?: string) {
    let snack;
    if (!selector) {
     snack = document.getElementById('snackbar');
    } else {
      snack = document.getElementById(selector);
    }
    snack.className = 'show';
    setTimeout( function(){
      snack.className = snack.className.replace('show', '');
    }, 3000);
  }
}
