import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsrConsulenzaManagerComponent } from './isr-consulenza-manager.component';

describe('IsrConsulenzaManagerComponent', () => {
  let component: IsrConsulenzaManagerComponent;
  let fixture: ComponentFixture<IsrConsulenzaManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsrConsulenzaManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsrConsulenzaManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
