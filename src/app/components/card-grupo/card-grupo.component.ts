import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-grupo',
  templateUrl: './card-grupo.component.html',
  styleUrls: ['./card-grupo.component.css']
})
export class CardGrupoComponent implements OnInit {
  @Input() grupo: any
  @Input() index: number | undefined

  nomeGrupo = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
    4: "E",
    5: "F",
    6: "G",
    7: "H"
  }


  constructor() { }

  ngOnInit(): void {

  }

}
