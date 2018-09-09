import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatComponent } from './animat.component';

describe('AnimatComponent', () => {
  let component: AnimatComponent;
  let fixture: ComponentFixture<AnimatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
