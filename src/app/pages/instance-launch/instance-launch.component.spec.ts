import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceLaunchComponent } from './instance-launch.component';

describe('InstanceLaunchComponent', () => {
  let component: InstanceLaunchComponent;
  let fixture: ComponentFixture<InstanceLaunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ InstanceLaunchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstanceLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
