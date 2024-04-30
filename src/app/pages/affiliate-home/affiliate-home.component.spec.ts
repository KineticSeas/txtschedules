import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateHomeComponent } from './affiliate-home.component';

describe('AffiliateHomeComponent', () => {
  let component: AffiliateHomeComponent;
  let fixture: ComponentFixture<AffiliateHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AffiliateHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffiliateHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
