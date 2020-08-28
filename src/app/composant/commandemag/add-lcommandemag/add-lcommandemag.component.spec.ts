import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLcommandemagComponent } from './add-lcommandemag.component';

describe('AddLcommandemagComponent', () => {
  let component: AddLcommandemagComponent;
  let fixture: ComponentFixture<AddLcommandemagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLcommandemagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLcommandemagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
