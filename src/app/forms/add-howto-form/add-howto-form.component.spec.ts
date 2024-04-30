import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHowtoFormComponent } from './add-howto-form.component';

describe('AddHowtoFormComponent', () => {
  let component: AddHowtoFormComponent;
  let fixture: ComponentFixture<AddHowtoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AddHowtoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHowtoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
