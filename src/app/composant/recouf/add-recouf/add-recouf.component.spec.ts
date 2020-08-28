import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecoufComponent } from './add-recouf.component';

describe('AddRecoufComponent', () => {
  let component: AddRecoufComponent;
  let fixture: ComponentFixture<AddRecoufComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecoufComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecoufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
