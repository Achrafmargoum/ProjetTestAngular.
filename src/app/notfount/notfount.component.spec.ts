import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfountComponent } from './notfount.component';

describe('NotfountComponent', () => {
  let component: NotfountComponent;
  let fixture: ComponentFixture<NotfountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotfountComponent]
    });
    fixture = TestBed.createComponent(NotfountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
