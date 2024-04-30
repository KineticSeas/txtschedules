import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmControlComponent } from './vm-control.component';

describe('VmControlComponent', () => {
  let component: VmControlComponent;
  let fixture: ComponentFixture<VmControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ VmControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VmControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
