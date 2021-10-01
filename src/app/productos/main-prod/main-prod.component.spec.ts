import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProdComponent } from './main-prod.component';

describe('MainProdComponent', () => {
  let component: MainProdComponent;
  let fixture: ComponentFixture<MainProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainProdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
