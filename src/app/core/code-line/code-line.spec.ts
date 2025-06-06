import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeLine } from './code-line';

describe('CodeLine', () => {
  let component: CodeLine;
  let fixture: ComponentFixture<CodeLine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeLine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeLine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
