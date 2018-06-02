import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Recipe4Component } from './recipe4.component';

describe('Recipe4Component', () => {
  let component: Recipe4Component;
  let fixture: ComponentFixture<Recipe4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Recipe4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Recipe4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
