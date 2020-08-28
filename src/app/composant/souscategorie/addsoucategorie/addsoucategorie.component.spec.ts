import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsoucategorieComponent } from './addsoucategorie.component';

describe('AddsoucategorieComponent', () => {
  let component: AddsoucategorieComponent;
  let fixture: ComponentFixture<AddsoucategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsoucategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsoucategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
