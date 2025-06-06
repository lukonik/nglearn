import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSingle } from './code-single';

describe('CodeSingle', () => {
  let component: CodeSingle;
  let fixture: ComponentFixture<CodeSingle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeSingle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeSingle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
