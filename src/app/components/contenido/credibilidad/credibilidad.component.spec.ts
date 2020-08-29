import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredibilidadComponent } from './credibilidad.component';

describe('CredibilidadComponent', () => {
  let component: CredibilidadComponent;
  let fixture: ComponentFixture<CredibilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredibilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
