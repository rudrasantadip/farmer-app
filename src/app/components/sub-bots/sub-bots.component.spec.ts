import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubBotsComponent } from './sub-bots.component';

describe('SubBotsComponent', () => {
  let component: SubBotsComponent;
  let fixture: ComponentFixture<SubBotsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubBotsComponent]
    });
    fixture = TestBed.createComponent(SubBotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
