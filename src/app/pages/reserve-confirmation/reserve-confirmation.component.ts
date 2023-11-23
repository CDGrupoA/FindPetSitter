import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { foundSitters } from 'src/app/services/mock-sitters';
@Component({
  selector: 'app-reserve-confirmation',
  templateUrl: './reserve-confirmation.component.html',
  styleUrls: ['./reserve-confirmation.component.css']
})
export class ReserveConfirmationComponent {

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

}
