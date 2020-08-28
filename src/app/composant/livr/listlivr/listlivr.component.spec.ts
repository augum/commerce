import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlivrComponent } from './listlivr.component';

describe('ListlivrComponent', () => {
  let component: ListlivrComponent;
  let fixture: ComponentFixture<ListlivrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListlivrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListlivrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
