import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})

export class NewKegComponent {
  showNewForm: boolean = false;

  submitForm(name: string, brand: string, price: string, abv: string) {
    const newKeg: Keg = new Keg(name, brand, parseInt(price), parseInt(abv));
    this.addKeg(newKeg);
  }

  showHideNewForm() {
    this.showNewForm = !this.showNewForm;
  }

  addKeg(newKeg: Keg) {
    Keg.addKeg(newKeg);
  }
}
