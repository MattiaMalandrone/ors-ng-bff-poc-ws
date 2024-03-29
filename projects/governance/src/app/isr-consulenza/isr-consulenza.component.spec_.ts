import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsrConsulenzaComponent } from './isr-consulenza.component';
// https://timdeschryver.dev/blog/testing-an-ngrx-project
describe('IsrConsulenzaComponent', () => {
  let component: IsrConsulenzaComponent;
  let fixture: ComponentFixture<IsrConsulenzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsrConsulenzaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsrConsulenzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
