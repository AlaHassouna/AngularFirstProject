import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubModalComponent } from './pub-modal.component';

describe('PubModalComponent', () => {
  let component: PubModalComponent;
  let fixture: ComponentFixture<PubModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PubModalComponent]
    });
    fixture = TestBed.createComponent(PubModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
