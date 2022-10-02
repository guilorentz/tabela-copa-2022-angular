import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-grupo',
  templateUrl: './card-grupo.component.html',
  styleUrls: ['./card-grupo.component.css']
})
export class CardGrupoComponent implements OnInit {
  @Input() grupo: any

  constructor() { }

  ngOnInit(): void {

  }

}
