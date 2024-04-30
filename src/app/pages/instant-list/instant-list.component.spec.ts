import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantListComponent } from './instant-list.component';

describe('InstantListComponent', () => {
  let component: InstantListComponent;
  let fixture: ComponentFixture<InstantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ InstantListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
