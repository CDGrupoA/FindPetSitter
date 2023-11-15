import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-how-section',
  templateUrl: './how-section.component.html',
  styleUrls: ['./how-section.component.css']
})
export class HowSectionComponent {
  @Input() src: string = '';
}
