import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesouscategorieComponent } from './listesouscategorie.component';

describe('ListesouscategorieComponent', () => {
  let component: ListesouscategorieComponent;
  let fixture: ComponentFixture<ListesouscategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListesouscategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesouscategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
