import { Component } from '@angular/core';
import { foundSitters } from 'src/app/services/mock-sitters';

@Component({
  selector: 'app-result-section',
  templateUrl: './result-section.component.html',
  styleUrls: ['./result-section.component.css']
})
export class ResultSectionComponent {
  foundSitters = foundSitters
}
