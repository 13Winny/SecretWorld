import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adm1Component } from './adm1.component';

describe('Adm1Component', () => {
  let component: Adm1Component;
  let fixture: ComponentFixture<Adm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Adm1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Adm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
