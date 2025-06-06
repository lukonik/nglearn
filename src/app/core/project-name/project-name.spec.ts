import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectName } from './project-name';

describe('ProjectName', () => {
  let component: ProjectName;
  let fixture: ComponentFixture<ProjectName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectName]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectName);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
