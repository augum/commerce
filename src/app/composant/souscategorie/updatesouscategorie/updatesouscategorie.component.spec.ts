import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesouscategorieComponent } from './updatesouscategorie.component';

describe('UpdatesouscategorieComponent', () => {
  let component: UpdatesouscategorieComponent;
  let fixture: ComponentFixture<UpdatesouscategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatesouscategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesouscategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
