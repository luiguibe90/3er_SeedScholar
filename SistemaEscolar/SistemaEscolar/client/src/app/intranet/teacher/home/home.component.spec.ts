import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponentTeacher } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponentTeacher;
  let fixture: ComponentFixture<HomeComponentTeacher>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponentTeacher ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponentTeacher);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
