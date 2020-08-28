import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpComponent } from './loginp.component';

describe('LoginpComponent', () => {
  let component: LoginpComponent;
  let fixture: ComponentFixture<LoginpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
