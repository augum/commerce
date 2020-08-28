import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListllivrComponent } from './listllivr.component';

describe('ListllivrComponent', () => {
  let component: ListllivrComponent;
  let fixture: ComponentFixture<ListllivrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListllivrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListllivrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
