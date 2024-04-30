import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHowtoComponent } from './add-howto.component';

describe('AddHowtoComponent', () => {
  let component: AddHowtoComponent;
  let fixture: ComponentFixture<AddHowtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AddHowtoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHowtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
