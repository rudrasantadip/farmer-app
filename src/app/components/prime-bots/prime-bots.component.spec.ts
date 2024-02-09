import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeBotsComponent } from './prime-bots.component';

describe('PrimeBotsComponent', () => {
  let component: PrimeBotsComponent;
  let fixture: ComponentFixture<PrimeBotsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimeBotsComponent]
    });
    fixture = TestBed.createComponent(PrimeBotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
