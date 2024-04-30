import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushToHostComponent } from './push-to-host.component';

describe('PushToHostComponent', () => {
  let component: PushToHostComponent;
  let fixture: ComponentFixture<PushToHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PushToHostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PushToHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
