import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeclientComponent } from './listeclient.component';

describe('ListeclientComponent', () => {
  let component: ListeclientComponent;
  let fixture: ComponentFixture<ListeclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
