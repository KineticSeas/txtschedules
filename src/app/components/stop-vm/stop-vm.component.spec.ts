import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopVmComponent } from './stop-vm.component';

describe('StopVmComponent', () => {
  let component: StopVmComponent;
  let fixture: ComponentFixture<StopVmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StopVmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopVmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
