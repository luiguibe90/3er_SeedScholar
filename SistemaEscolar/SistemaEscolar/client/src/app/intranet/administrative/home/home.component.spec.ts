import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponentAdministrative } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponentAdministrative;
  let fixture: ComponentFixture<HomeComponentAdministrative>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponentAdministrative ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponentAdministrative);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
