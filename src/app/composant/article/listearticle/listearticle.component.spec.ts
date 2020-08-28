import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListearticleComponent } from './listearticle.component';

describe('ListearticleComponent', () => {
  let component: ListearticleComponent;
  let fixture: ComponentFixture<ListearticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListearticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListearticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
