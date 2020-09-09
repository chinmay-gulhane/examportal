import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGiveExamComponent } from './student-give-exam.component';

describe('StudentGiveExamComponent', () => {
  let component: StudentGiveExamComponent;
  let fixture: ComponentFixture<StudentGiveExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentGiveExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentGiveExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
