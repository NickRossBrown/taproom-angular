import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-edit-tap',
  templateUrl: './edit-tap.component.html',
  styleUrls: ['./edit-tap.component.css']
})
export class EditTapComponent {
  @Input() selectedKeg: Keg;
  @Output() doneEditing = new EventEmitter();

  finishedEditing() {
    this.doneEditing.emit();
  }
}
