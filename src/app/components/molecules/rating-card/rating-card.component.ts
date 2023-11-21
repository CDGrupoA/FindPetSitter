import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-card',
  templateUrl: './rating-card.component.html',
  styleUrls: ['./rating-card.component.css']
})
export class RatingCardComponent {
  @Input() imagePath: string ='';
  @Input() name: string ='';
  @Input() report: string = '';
  @Input() cidade: string = '';
  @Input() data: string = ''
}
