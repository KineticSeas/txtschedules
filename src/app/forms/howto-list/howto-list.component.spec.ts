import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtoListComponent } from './howto-list.component';

describe('HowtoListComponent', () => {
  let component: HowtoListComponent;
  let fixture: ComponentFixture<HowtoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HowtoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowtoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
