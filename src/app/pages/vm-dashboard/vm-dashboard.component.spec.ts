import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmDashboardComponent } from './vm-dashboard.component';

describe('VmDashboardComponent', () => {
  let component: VmDashboardComponent;
  let fixture: ComponentFixture<VmDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ VmDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VmDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
