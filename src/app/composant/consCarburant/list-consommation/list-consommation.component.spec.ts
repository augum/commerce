import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConsommationComponent } from './list-consommation.component';

describe('ListConsommationComponent', () => {
  let component: ListConsommationComponent;
  let fixture: ComponentFixture<ListConsommationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListConsommationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConsommationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
