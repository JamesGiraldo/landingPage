import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcripcionComponent } from './subcripcion.component';

describe('SubcripcionComponent', () => {
  let component: SubcripcionComponent;
  let fixture: ComponentFixture<SubcripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
