import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.css']
})
export class InputCheckboxComponent {

  @Input() type: string = '';
  @Input() id: string = '';
  @Input() name: string = '';
}
