import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhtmlComponent } from './myhtml.component';

describe('MyhtmlComponent', () => {
  let component: MyhtmlComponent;
  let fixture: ComponentFixture<MyhtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyhtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyhtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
