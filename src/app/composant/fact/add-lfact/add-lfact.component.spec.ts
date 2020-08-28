import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLfactComponent } from './add-lfact.component';

describe('AddLfactComponent', () => {
  let component: AddLfactComponent;
  let fixture: ComponentFixture<AddLfactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLfactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLfactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
