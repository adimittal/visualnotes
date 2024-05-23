import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualnotesComponent } from './visualnotes.component';

describe('VisualnotesComponent', () => {
  let component: VisualnotesComponent;
  let fixture: ComponentFixture<VisualnotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualnotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
