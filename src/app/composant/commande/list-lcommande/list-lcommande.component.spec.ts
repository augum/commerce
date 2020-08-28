import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLcommandeComponent } from './list-lcommande.component';

describe('ListLcommandeComponent', () => {
  let component: ListLcommandeComponent;
  let fixture: ComponentFixture<ListLcommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLcommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLcommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
