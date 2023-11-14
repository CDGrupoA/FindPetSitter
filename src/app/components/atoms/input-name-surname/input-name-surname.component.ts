import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-name-surname',
  templateUrl: './input-name-surname.component.html',
  styleUrls: ['./input-name-surname.component.css']
})
export class InputNameSurnameComponent {
  @Input() type: string = '';
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() placeholder: string = '';
}
