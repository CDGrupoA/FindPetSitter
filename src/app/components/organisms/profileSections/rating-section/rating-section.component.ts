import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { foundSitters } from 'src/app/services/mock-sitters';

@Component({
  selector: 'app-rating-section',
  templateUrl: './rating-section.component.html',
  styleUrls: ['./rating-section.component.css']
})
export class RatingSectionComponent implements OnInit{
  foundSitter: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.foundSitter = this.getSitterById(id);
    }
  }

  getSitterById(id: string): any {
    return foundSitters.find(sitter => sitter.id === id);
  }

    ratings = [
      {
        name: "Marta.",
        report: "Serviço excelente ! Recomendo à todos meus amigos. Todos os animais foram bem alimentados e casa estava em ordem.",
        cidade: 'Porto Alegre -RS',
        nota: "3",
        avaliacoes: "4",
        valor: "50",
        image: "assets/imgs/fotos/marta.png",
        data: 'Setembro, 2023',
      },
      {
        name: "Carla",
        report: "Fulana foi muito simpática desde o primeiro contato, ela teve dificuldade em encontrar o gato mas logo foi resolvido(Ele estava na gaveta).",
        cidade: 'Porto Alegre -RS',
        nota: '5',
        avaliacoes: '2',
        valor: '50',
        image: "assets/imgs/fotos/carla.png",
        data: 'Setembro, 2023'
      },
      {
        name: "Ciclano",
        report: "Podia melhorar, quando contratei ela tinha um gato e um cachorro. Não sei onde está meu gato :( !!! ",
        cidade: 'Porto Alegre -RS',
        nota: '5',
        avaliacoes: '1',
        valor: '40',
        image: "assets/imgs/fotos/ciclano.png",
        data: 'Outubro, 2023'
      },
      {
        name: "Betania",
        report: "Adorei o serviço de Sitter da Fulana !! Passei o fim de semana fora de casa e quando voltei parecia até que tenho mais gatos do que antes :) !! ",
        cidade: 'Porto Alegre -RS',
        nota: '5',
        avaliacoes: '80',
        valor: '50',
        image: "assets/imgs/fotos/betania.png",
        data: 'Outubro, 2023'

      },
    ]
}
