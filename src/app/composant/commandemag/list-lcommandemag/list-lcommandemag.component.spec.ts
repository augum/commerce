import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLcommandemagComponent } from './list-lcommandemag.component';

describe('ListLcommandemagComponent', () => {
  let component: ListLcommandemagComponent;
  let fixture: ComponentFixture<ListLcommandemagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLcommandemagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLcommandemagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
