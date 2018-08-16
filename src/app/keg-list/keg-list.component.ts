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
    kegToSell.sellPint();
  }
}
