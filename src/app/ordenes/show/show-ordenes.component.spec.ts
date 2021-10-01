import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOrdenesComponent } from './show-ordenes.component';

describe('ShowOrdenesComponent', () => {
  let component: ShowOrdenesComponent;
  let fixture: ComponentFixture<ShowOrdenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOrdenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOrdenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
