import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilamentFormComponent } from './filament-form.component';

describe('FilamentFormComponent', () => {
  let component: FilamentFormComponent;
  let fixture: ComponentFixture<FilamentFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilamentFormComponent]
    });
    fixture = TestBed.createComponent(FilamentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
