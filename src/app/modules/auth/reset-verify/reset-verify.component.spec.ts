import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetVerifyComponent } from './reset-verify.component';

describe('PasswordResetComponent', () => {
  let component: ResetVerifyComponent;
  let fixture: ComponentFixture<ResetVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
