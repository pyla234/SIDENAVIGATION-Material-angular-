import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsafeLoginComponent } from './isafe-login.component';

describe('IsafeLoginComponent', () => {
  let component: IsafeLoginComponent;
  let fixture: ComponentFixture<IsafeLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsafeLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsafeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
