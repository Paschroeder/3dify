import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilamentListComponent } from './filament-list.component';

describe('FilamentListComponent', () => {
  let component: FilamentListComponent;
  let fixture: ComponentFixture<FilamentListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilamentListComponent]
    });
    fixture = TestBed.createComponent(FilamentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
