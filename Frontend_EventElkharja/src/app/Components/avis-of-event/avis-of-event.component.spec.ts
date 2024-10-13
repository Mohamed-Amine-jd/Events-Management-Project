import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisOfEventComponent } from './avis-of-event.component';

describe('AvisOfEventComponent', () => {
  let component: AvisOfEventComponent;
  let fixture: ComponentFixture<AvisOfEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvisOfEventComponent]
    });
    fixture = TestBed.createComponent(AvisOfEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
