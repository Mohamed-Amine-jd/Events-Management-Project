import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageeventComponent } from './manageevent.component';

describe('ManageeventComponent', () => {
  let component: ManageeventComponent;
  let fixture: ComponentFixture<ManageeventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageeventComponent]
    });
    fixture = TestBed.createComponent(ManageeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
