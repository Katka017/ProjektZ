import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescribtionComponent } from './describtion.component';

describe('DescribtionComponent', () => {
  let component: DescribtionComponent;
  let fixture: ComponentFixture<DescribtionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescribtionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescribtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
