import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reserve-card',
  templateUrl: './reserve-card.component.html',
  styleUrls: ['./reserve-card.component.css']
})
export class ReserveCardComponent {
  @Input() name: string ='';
  @Input() valor: string ='';
}
