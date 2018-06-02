import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZdrowieComponent } from './zdrowie.component';

describe('ZdrowieComponent', () => {
  let component: ZdrowieComponent;
  let fixture: ComponentFixture<ZdrowieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZdrowieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZdrowieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
