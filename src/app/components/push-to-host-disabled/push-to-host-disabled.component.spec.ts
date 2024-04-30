import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushToHostDisabledComponent } from './push-to-host-disabled.component';

describe('PushToHostDisabledComponent', () => {
  let component: PushToHostDisabledComponent;
  let fixture: ComponentFixture<PushToHostDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PushToHostDisabledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PushToHostDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
