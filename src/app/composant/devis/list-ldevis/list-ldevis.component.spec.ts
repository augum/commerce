import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLdevisComponent } from './list-ldevis.component';

describe('ListLdevisComponent', () => {
  let component: ListLdevisComponent;
  let fixture: ComponentFixture<ListLdevisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLdevisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLdevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
