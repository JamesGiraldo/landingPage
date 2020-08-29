import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
  public precio1 = `$25.000`;
  public precio2 = `$100.000`;
  public precio3 = `$15.000`;
  public plan2 = `PLAN PREMIUM`;
  public plan1 = `PLAN PROMO`;
  public mun_plan1 = `PLAN 1`;
  public num_plan2 = `PLAN 2`;
  public num_plan3 = `PLAN 3`;
  constructor() { }

  ngOnInit(): void {
  }

}
