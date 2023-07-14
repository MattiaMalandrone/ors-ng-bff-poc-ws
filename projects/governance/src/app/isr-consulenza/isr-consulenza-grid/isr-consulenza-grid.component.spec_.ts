import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsrConsulenzaGridComponent } from './isr-consulenza-grid.component';

describe('IsrConsulenzaGridComponent', () => {
  let component: IsrConsulenzaGridComponent;
  let fixture: ComponentFixture<IsrConsulenzaGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsrConsulenzaGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsrConsulenzaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
