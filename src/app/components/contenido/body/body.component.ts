import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public titulo1 = `Tutorias online`;
  public titulo2 = `Clases en vivo`;  
  public suscripcion = '20%';
  constructor() { }

  ngOnInit(): void {
  }

}
