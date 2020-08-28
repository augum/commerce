import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFfactComponent } from './add-ffact.component';

describe('AddFfactComponent', () => {
  let component: AddFfactComponent;
  let fixture: ComponentFixture<AddFfactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFfactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFfactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
