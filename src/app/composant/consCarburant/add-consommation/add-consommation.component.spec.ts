import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConsommationComponent } from './add-consommation.component';

describe('AddConsommationComponent', () => {
  let component: AddConsommationComponent;
  let fixture: ComponentFixture<AddConsommationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConsommationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConsommationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
