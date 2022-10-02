import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-fase-grupos',
  templateUrl: './fase-grupos.component.html',
  styleUrls: ['./fase-grupos.component.css']
})
export class FaseGruposComponent implements OnInit {

  grupos : any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("assets/countries.json").subscribe(data => {
      this.grupos = data;
      console.log(this.grupos)
    })
  }

}
