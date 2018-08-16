import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})

export class KegListComponent {
  @Output() editClickSender = new EventEmitter();
  kegList = Keg.kegList;

  editButtonClicked(kegToEdit: Keg) {
    this.editClickSender.emit(kegToEdit);
  }

  sellButtonClicked(kegToSell: Keg) {
    if (kegToSell.qty > 0) kegToSell.sellPint();
  }

  deleteButtonClicked(kegToDelete: Keg) {
    Keg.deleteKeg(kegToDelete);
  }

  getColorForPrice(keg: Keg) {
    let color: string = '';
    keg.price <= 5 ? color = 'green' : color = 'blue';

    return color;
  }
}
