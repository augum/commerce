import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFfactComponent } from './list-ffact.component';

describe('ListFfactComponent', () => {
  let component: ListFfactComponent;
  let fixture: ComponentFixture<ListFfactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFfactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFfactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
