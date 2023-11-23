import { Component, Input, ViewChild } from '@angular/core';
import { PopupComponent } from '../../molecules/popup/popup.component';

@Component({
  selector: 'app-reserve-card',
  templateUrl: './reserve-card.component.html',
  styleUrls: ['./reserve-card.component.css']
})
export class ReserveCardComponent {
  @Input() name: string ='';
  @Input() valor: string ='';
  @Input() id: string = ''


}
