import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { foundSitters } from 'src/app/services/mock-sitters';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.css']
})
export class InfoSectionComponent  implements OnInit{
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
