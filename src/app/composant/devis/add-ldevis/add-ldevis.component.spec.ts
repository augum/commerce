import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLdevisComponent } from './add-ldevis.component';

describe('AddLdevisComponent', () => {
  let component: AddLdevisComponent;
  let fixture: ComponentFixture<AddLdevisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLdevisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLdevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
