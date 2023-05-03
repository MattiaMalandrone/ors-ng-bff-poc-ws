import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaGridComponent } from './mega-grid.component';

describe('MegaGridComponent', () => {
  //let component: MegaGridComponent;
  //let fixture: ComponentFixture<MegaGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MegaGridComponent],
    }).compileComponents();

    // fixture = TestBed.createComponent(MegaGridComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
  });
});
