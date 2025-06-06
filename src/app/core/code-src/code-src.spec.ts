import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSrc } from './code-src';

describe('CodeSrc', () => {
  let component: CodeSrc;
  let fixture: ComponentFixture<CodeSrc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeSrc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeSrc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
