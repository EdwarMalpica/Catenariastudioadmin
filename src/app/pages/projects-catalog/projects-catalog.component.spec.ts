import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsCatalogComponent } from './projects-catalog.component';

describe('ProjectsCatalogComponent', () => {
  let component: ProjectsCatalogComponent;
  let fixture: ComponentFixture<ProjectsCatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsCatalogComponent]
    });
    fixture = TestBed.createComponent(ProjectsCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
