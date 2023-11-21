import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.css']
})
export class ReportCardComponent {
  @Input() imagePath: string ='';
  @Input() name: string ='';
  @Input() report: string = '';
  @Input() cidade: string = '';
  @Input() data: string = ''

}
