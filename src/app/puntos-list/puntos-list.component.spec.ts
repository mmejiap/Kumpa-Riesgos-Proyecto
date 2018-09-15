import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntosListComponent } from './puntos-list.component';

describe('PuntosListComponent', () => {
  let component: PuntosListComponent;
  let fixture: ComponentFixture<PuntosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
