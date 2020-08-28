import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmagasinComponent } from './addmagasin.component';

describe('AddmagasinComponent', () => {
  let component: AddmagasinComponent;
  let fixture: ComponentFixture<AddmagasinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmagasinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
