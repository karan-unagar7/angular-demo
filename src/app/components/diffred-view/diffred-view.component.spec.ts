import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffredViewComponent } from './diffred-view.component';

describe('DiffredViewComponent', () => {
  let component: DiffredViewComponent;
  let fixture: ComponentFixture<DiffredViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiffredViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiffredViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
