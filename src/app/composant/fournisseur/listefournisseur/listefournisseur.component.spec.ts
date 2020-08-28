import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListefournisseurComponent } from './listefournisseur.component';

describe('ListefournisseurComponent', () => {
  let component: ListefournisseurComponent;
  let fixture: ComponentFixture<ListefournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListefournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListefournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
