import { Component } from '@angular/core';

@Component({
  selector: 'app-result-section',
  templateUrl: './result-section.component.html',
  styleUrls: ['./result-section.component.css']
})
export class ResultSectionComponent {
  foundSitters = [
    {
      name: "Fulana C.",
      descricao: "Atuo como Sitter a mais de 5 anos. Gosto muito de animais de todos os tipos e adoro cuidar de animais grandes. Sou muito atenta e cuidadosa.",
      cidade: 'Porto Alegre -RS',
      nota: "3",
      avaliacoes: "4",
      valor: "50",
      image: "assets/imgs/fotos/fulana.png"
    },
    {
      name: "Beltrana",
      descricao: "Tenho 2 gatos e 3 cachorros, mas adoro conhecer mais animais, por isso comecei a trabalhar como Sitter.Atuo como Sitter a mais de 5 anos. Gosto muito de animais de todos os tipos e adoro cuidar de animais grandes. Sou muito atenta e cuidadosa.",
      cidade: 'Porto Alegre -RS',
      nota: '5',
      avaliacoes: '2',
      valor: '50',
      image: "assets/imgs/fotos/beltrana.png"
    },
    {
      name: "Humberto",
      descricao: "Sou estudante de veterinária e adoro animais. Trabalho como sitter à pouco tempo mas gostarAtuo Sou estudante de veterinária e adoro animais. Trabalho como sitter à pouco tempo mas gostar SittSou estudante de veterinária e adoro animais. Trabalho como sitter à pouco tempo mas gostarer a mais de 5 anos. Gosto muito de animais de todos os tipos e adoro cuidar de animais grandes. Sou muito atenta e cuidadosa.",
      cidade: 'Porto Alegre -RS',
      nota: '5',
      avaliacoes: '1',
      valor: '40',
      image: "assets/imgs/fotos/Humberto.png"
    },
    {
      name: "Doisberto ",
      descricao: "Comecei a trabalhar como Sitter por incentivo do meu irmão que é estudante de veterinária. como Sitter a mais de 5 anos. Gosto muito de animais de todos os tipos e adoro cuidar de animais grandes. Sou muito atenta e cuidadosa.",
      cidade: 'Porto Alegre -RS',
      nota: '5',
      avaliacoes: '80',
      valor: '50',
      image: "assets/imgs/fotos/Doisberto.png"
    },
  ]
}
