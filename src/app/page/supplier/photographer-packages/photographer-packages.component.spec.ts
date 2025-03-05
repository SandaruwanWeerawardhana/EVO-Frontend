import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographerPackagesComponent } from './photographer-packages.component';

describe('PhotographerPackagesComponent', () => {
  let component: PhotographerPackagesComponent;
  let fixture: ComponentFixture<PhotographerPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotographerPackagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotographerPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
