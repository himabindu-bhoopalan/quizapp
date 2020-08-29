import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiznameComponent } from './quizname.component';

describe('QuiznameComponent', () => {
  let component: QuiznameComponent;
  let fixture: ComponentFixture<QuiznameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuiznameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiznameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
