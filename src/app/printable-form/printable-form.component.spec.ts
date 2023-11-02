import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintableFormComponent } from './printable-form.component';

describe('PrintableFormComponent', () => {
  let component: PrintableFormComponent;
  let fixture: ComponentFixture<PrintableFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrintableFormComponent]
    });
    fixture = TestBed.createComponent(PrintableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
