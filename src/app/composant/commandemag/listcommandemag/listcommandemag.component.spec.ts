import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcommandemagComponent } from './listcommandemag.component';

describe('ListcommandemagComponent', () => {
  let component: ListcommandemagComponent;
  let fixture: ComponentFixture<ListcommandemagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcommandemagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcommandemagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
