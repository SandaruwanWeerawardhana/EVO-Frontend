import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPreviousWorkComponent } from './view-previous-work.component';

describe('ViewPreviousWorkComponent', () => {
  let component: ViewPreviousWorkComponent;
  let fixture: ComponentFixture<ViewPreviousWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPreviousWorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPreviousWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
