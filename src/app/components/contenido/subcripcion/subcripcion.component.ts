import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcripcion',
  templateUrl: './subcripcion.component.html',
  styleUrls: ['./subcripcion.component.css']
})
export class SubcripcionComponent implements OnInit {
  public suscripcion = '20%';
  constructor() { }

  ngOnInit(): void {
  }

}
