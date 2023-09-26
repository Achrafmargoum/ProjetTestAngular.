import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FertComponent } from './fert.component';

describe('FertComponent', () => {
  let component: FertComponent;
  let fixture: ComponentFixture<FertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FertComponent]
    });
    fixture = TestBed.createComponent(FertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
