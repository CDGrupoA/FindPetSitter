import { Component } from '@angular/core';

@Component({
  selector: 'app-reports-section',
  templateUrl: './reports-section.component.html',
  styleUrls: ['./reports-section.component.css']
})
export class ReportsSectionComponent {
    reports = [
      {
        name: "Carla",
        report: 'A plataforma me deixa muito segura em encontrar o Pet Sitter perfeito para meus bixinhos e também para o meu bolso !',
        cidade: 'Porto Alegre',
        data: 'Setembro 2023',
        image: "assets/imgs/fotos/reportpic1.png"
      },
      {
        name: 'Renata',
        report: 'Find Pet Sitter mudou minha vida ! Posso viajar com tranquilidade pois sei que o Ricardo e o Milos vão estar em boas mãos !',
        cidade: 'Porto Alegre',
        data: 'Agosto 2023',
        image: "assets/imgs/fotos/reportpic2.png"
      }
    ]
}
