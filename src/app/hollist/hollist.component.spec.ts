import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HollistComponent } from './hollist.component';

describe('HollistComponent', () => {
  let component: HollistComponent;
  let fixture: ComponentFixture<HollistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HollistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HollistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
