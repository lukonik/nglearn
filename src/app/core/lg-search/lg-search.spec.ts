import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgSearch } from './lg-search';

describe('LgSearch', () => {
  let component: LgSearch;
  let fixture: ComponentFixture<LgSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LgSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LgSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
