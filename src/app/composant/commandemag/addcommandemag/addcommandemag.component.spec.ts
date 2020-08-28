import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcommandemagComponent } from './addcommandemag.component';

describe('AddcommandemagComponent', () => {
  let component: AddcommandemagComponent;
  let fixture: ComponentFixture<AddcommandemagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcommandemagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcommandemagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
