import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAComponentComponent } from './child-acomponent.component';

describe('ChildAComponentComponent', () => {
  let component: ChildAComponentComponent;
  let fixture: ComponentFixture<ChildAComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildAComponentComponent]
    });
    fixture = TestBed.createComponent(ChildAComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
