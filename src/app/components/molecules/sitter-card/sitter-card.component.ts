import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sitter-card',
  templateUrl: './sitter-card.component.html',
  styleUrls: ['./sitter-card.component.css']
})
export class SitterCardComponent {
  @Input() imagePath: string ='';
  @Input() name: string ='';
  @Input() descricao: string = '';
  @Input() cidade: string = '';
  @Input() nota: number = 1
  @Input() avaliacoes: string = '';
  @Input() valor: string ='';
  @Input() id: string = ''
}
