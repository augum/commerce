import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecommandemagComponent } from './updatecommandemag.component';

describe('UpdatecommandemagComponent', () => {
  let component: UpdatecommandemagComponent;
  let fixture: ComponentFixture<UpdatecommandemagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecommandemagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecommandemagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
