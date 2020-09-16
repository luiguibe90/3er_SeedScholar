import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponentStudent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponentStudent;
  let fixture: ComponentFixture<HomeComponentStudent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponentStudent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponentStudent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
